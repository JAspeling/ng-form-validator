import { ValidationErrors } from '@angular/forms';

import { ValidationBuilder } from './validation-builder';
import { IValidationBuilder } from './validation-builder.interface';
import { isNullOrUndefined } from '../utils';

export class StringValidationBuilder
  implements IValidationBuilder<string>
{
  get errors(): ValidationErrors {
    return this.builder.baseErrors;
  }

  get value(): string {
    return this.builder.value;
  }
  set value(val: string) {
    if (val !== this.builder.value) {
      this.builder.value = val;
    }
  }
  constructor(private readonly builder: ValidationBuilder<string>) {}

  public minLengthAllowed(
    min: number,
    errorMessage?: string,
  ): StringValidationBuilder {
    if (this.builder.ignore || isNullOrUndefined(this.value)) {
      return this;
    }
    errorMessage = errorMessage || `Min length of ${min} characters`;

    if (this.value.length < min) {
      this.errors.minLength = errorMessage;
    }

    return this;
  }

  public maxLengthAllowed(
    max: number,
    errorMessage?: string,
  ): StringValidationBuilder {
    if (this.builder.ignore || isNullOrUndefined(this.value)) {
      return this;
    }
    errorMessage = errorMessage || `Max length of ${max} characters`;

    if (this.value.length > max) {
      this.errors.maxLength = errorMessage;
    }

    return this;
  }

  public range(
    lowerRange: number,
    upperRange: number,
    errorMessage?: string,
  ): StringValidationBuilder {
    if (this.builder.ignore || isNullOrUndefined(this.value)) {
      return this;
    }
    errorMessage =
      errorMessage ||
      `Require between ${lowerRange} and ${upperRange} characters`;

    if (this.value.length < lowerRange || this.value.length > upperRange) {
      this.errors.invalidRange = errorMessage;
    }
    return this;
  }

  public regex(
    regexString: RegExp,
    errorMessage?: string,
  ): StringValidationBuilder {
    if (this.builder.ignore || isNullOrUndefined(this.value)) {
      return this;
    }

    errorMessage = errorMessage || 'Invalid pattern';

    if (typeof this.value === 'string') {
      if (isNullOrUndefined(this.value.match(regexString))) {
        this.errors.invalidPattern = errorMessage;
      }
    } else {
      this.errors.invalidPattern = 'Invalid object type';
    }

    return this;
  }

  ifTrue(
    callbackFn: (value: string) => boolean,
    errorKey: string,
    errorMessage: string,
  ): StringValidationBuilder {
    this.builder.ifTrue(callbackFn, errorKey, errorMessage);
    return this;
  }

  ifFalse(
    callbackFn: (value: string) => boolean,
    errorKey: string,
    errorMessage: string,
  ): StringValidationBuilder {
    this.builder.ifFalse(callbackFn, errorKey, errorMessage);
    return this;
  }

  isRequired(): StringValidationBuilder {
    this.builder.isRequired();
    return this;
  }

  withMessage(message: string, property?: string): StringValidationBuilder {
    this.builder.withMessage(message, property);
    return this;
  }

  ignoreWhen(callbackFn: (value: string) => boolean): StringValidationBuilder {
    this.builder.ignoreWhen(callbackFn);
    return this;
  }

  addErrors(): StringValidationBuilder {
    this.builder.addErrors();
    return this;
  }

  build(): ValidationErrors {
    return this.builder.build();
  }
}
