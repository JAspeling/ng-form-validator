import { ValidationErrors } from '@angular/forms';
import { IValidationBuilder } from './validation-builder.interface';
import { ValidationBuilder } from './validation-builder';

export class BooleanValidationBuilder
  implements IValidationBuilder<boolean>
{
  get errors(): ValidationErrors {
    return this.builder.baseErrors;
  }

  get value(): boolean {
    return this.builder.value;
  }
  set value(val: boolean) {
    if (val !== this.builder.value) {
      this.builder.value = val;
    }
  }

  constructor(private readonly builder: ValidationBuilder<boolean>) {}

  ifTrue(
    callbackFn: (value: boolean) => boolean,
    errorKey: string,
    errorMessage: string,
  ): BooleanValidationBuilder {
    this.builder.ifTrue(callbackFn, errorKey, errorMessage);
    return this;
  }

  ifFalse(
    callbackFn: (value: boolean) => boolean,
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

  ignoreWhen(callbackFn: (value: boolean) => boolean): BooleanValidationBuilder {
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
