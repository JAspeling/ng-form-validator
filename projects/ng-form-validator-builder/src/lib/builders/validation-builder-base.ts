import { UntypedFormControl, ValidationErrors, Validators } from '@angular/forms';

import { addErrorsToControl } from '../form-utils';
import {
  deleteAllPropertiesOfObject,
  isEmptyObject,
  isNullOrUndefined,
  isNullOrWhitespace,
} from '../utils';
import { IValidationBuilder } from './validation-builder-base.interface';

export class ValidationBuilderBase<T>
  implements IValidationBuilder<T>
{
  baseErrors: ValidationErrors = {};
  baseControl: UntypedFormControl;
  ignore: boolean = false;

  // This value can be changed in the builder chain,
  // but it should never change the actual value of the FormControl.
  value: T;

  get controlValue(): T {
    return isNullOrUndefined(this.baseControl) ? null : this.baseControl.value;
  }

  protected initialize(): void {
    this.value = this.controlValue;
  }

  public ifTrue(
    callbackFn: (value: T) => boolean,
    errorKey: string,
    errorMessage: string,
  ): IValidationBuilder<T> {
    if (this.ignore) {
      return this;
    }

    if (callbackFn(this.controlValue)) {
      this.baseErrors[errorKey] = errorMessage;
    }

    return this;
  }

  public ifFalse(
    callbackFn: (value: T) => boolean,
    errorKey: string,
    errorMessage: string,
  ): IValidationBuilder<T> {
    if (this.ignore) {
      return this;
    }

    if (!callbackFn(this.controlValue)) {
      this.baseErrors[errorKey] = errorMessage;
    }

    return this;
  }

  public isRequired(errorMessage?: string): IValidationBuilder<T> {
    if (this.ignore) {
      return this;
    }

    errorMessage = errorMessage || 'Required Field';

    const validationResult = Validators.required(this.baseControl);

    if (
      !isNullOrUndefined(validationResult) &&
      !isNullOrUndefined(validationResult.required)
    ) {
      this.baseErrors.required = errorMessage;
    }

    return this;
  }

  public withMessage(message: string, property?: string): IValidationBuilder<T> {
    // don't add a message if there are not errors - no validations failed.
    if (isEmptyObject(this.baseErrors) || isNullOrWhitespace(message)) {
      return this;
    }

    deleteAllPropertiesOfObject(this.baseErrors);
    this.baseErrors[property || 'error'] = message;

    return this;
  }

  public ignoreWhen(callbackFn: (value: T) => boolean): IValidationBuilder<T> {
    if (this.ignore) {
      return this;
    }

    if (callbackFn(this.value)) {
      this.ignore = true;
    }
    return this;
  }

  public addErrors(): IValidationBuilder<T> {
    addErrorsToControl(this.baseControl, this.build());

    return this;
  }

  public build(): ValidationErrors {
    return isEmptyObject(this.baseErrors) ? null : this.baseErrors;
  }
}
