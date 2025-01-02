import { FormControl, ValidationErrors } from '@angular/forms';
import { IValidationBuilder } from './validation-builder.interface';
import { ValidationBuilderBase } from './validation-builder-base';

export class BooleanValidationBuilder implements IValidationBuilder {
  get errors(): ValidationErrors {
    return this.builder.baseErrors;
  }

  get control(): FormControl {
    return this.builder.baseControl;
  }

  get value(): any {
    return this.builder.value;
  }
  set value(val: any) {
    if (val !== this.builder.value) {
      this.builder.value = val;
    }
  }

  constructor(private readonly builder: ValidationBuilderBase) {}

  ifTrue(
    callbackFn: (value: any) => boolean,
    errorKey: string,
    errorMessage: string,
  ): BooleanValidationBuilder {
    this.builder.ifTrue(callbackFn, errorKey, errorMessage);
    return this;
  }

  ifFalse(
    callbackFn: (value: any) => boolean,
    errorKey: string,
    errorMessage: string,
  ): BooleanValidationBuilder {
    this.builder.ifFalse(callbackFn, errorKey, errorMessage);
    return this;
  }

  isRequired(errorMessage?: string): BooleanValidationBuilder {
    errorMessage = errorMessage || 'Required Field';

    if (!this.value) {
      this.errors.required = errorMessage;
    }

    return this;
  }

  ignoreWhen(callbackFn: (value: any) => boolean): BooleanValidationBuilder {
    this.builder.ignoreWhen(callbackFn);
    return this;
  }

  withMessage(message: string, property?: string): BooleanValidationBuilder {
    this.builder.withMessage(message, property);
    return this;
  }

  addErrors(): BooleanValidationBuilder {
    this.builder.addErrors();
    return this;
  }

  build(): ValidationErrors {
    return this.builder.build();
  }
}
