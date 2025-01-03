import { ValidationErrors } from '@angular/forms';
import { isNullOrUndefined, isNumber } from 'is-what';

import { IValidationBuilder } from './validation-builder.interface';
import { ValidationBuilder } from './validation-builder';

const MaxSafeNumber: number = 9000000000000000;

export class NumericValidationBuilder implements IValidationBuilder<number> {
  get value(): number {
    return this.builder.value;
  }
  set value(val: number) {
    if (val !== this.builder.value) {
      this.builder.value = val;
    }
  }

  get errors(): ValidationErrors {
    return this.builder.baseErrors;
  }

  constructor(private readonly builder: ValidationBuilder<number>) {
    this.builder = builder;
  }

  public isValidNumber(errorMessage?: string): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    errorMessage = errorMessage || 'Invalid input';
    if (!this.assertNumber()) {
      this.errors.invalidNumber = errorMessage;
    }

    return this;
  }

  public isInteger(errorMessage?: string): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    errorMessage = errorMessage || 'Invalid input';

    if (!Number.isInteger(+this.value)) {
      this.errors.invalidNumber = errorMessage;
    }

    return this;
  }

  public lessThan(
    comparer: number,
    errorMessage?: string,
  ): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    errorMessage = errorMessage || `Value needs to be less than ${comparer}`;
    if (!this.assertNumber()) {
      return this;
    }

    if (this.value >= comparer) {
      this.errors.valueNotLessThan = errorMessage;
    }

    return this;
  }

  public lessThanZero(errorMessage?: string): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    return this.lessThan(0, errorMessage);
  }

  public lessThanOrEqualTo(
    comparer: number,
    errorMessage?: string,
  ): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    errorMessage =
      errorMessage || `Value needs to be less than or equal to ${comparer}`;

    if (!this.assertNumber()) {
      return this;
    }

    if (this.value > comparer) {
      this.errors.valueNotLessThanOrEqual = errorMessage;
    }

    return this;
  }

  public greaterThan(
    comparer: number,
    errorMessage?: string,
  ): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    errorMessage = errorMessage || `Value needs to be greater than ${comparer}`;

    if (!this.assertNumber()) {
      return this;
    }

    if (this.value <= comparer) {
      this.errors.valueNotGreaterThan = errorMessage;
    }

    return this;
  }

  public greaterThanZero(errorMessage?: string): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    return this.greaterThan(0, errorMessage);
  }

  public greaterThanOrEqualTo(
    comparer: number,
    errorMessage?: string,
  ): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    errorMessage =
      errorMessage || `Value needs to be greater than or equal to ${comparer}`;

    if (!this.assertNumber()) {
      return this;
    }

    if (this.value < comparer) {
      this.errors.valueNotGreaterThanOrEqual = errorMessage;
    }

    return this;
  }

  public lessThanMax(errorMessage?: string): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    errorMessage = errorMessage || `Value may not exceed 9,000,000,000,000,000`;

    if (!this.assertNumber()) {
      return this;
    }

    if (this.value > MaxSafeNumber) {
      this.errors.valueExceedsMax = errorMessage;
    }

    return this;
  }

  public minValueAllowed(
    min: number,
    errorMessage?: string,
  ): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    errorMessage =
      errorMessage || `Value needs to be greater than or equal to ${min}`;

    if (!this.assertNumber()) {
      return this;
    }

    if (this.value < min) {
      this.errors.minLength = errorMessage;
    }

    return this;
  }

  public maxValueAllowed(
    max: number,
    errorMessage?: string,
  ): NumericValidationBuilder {
    if (this.builder.ignore) {
      return this;
    }

    errorMessage =
      errorMessage || `Value needs to be less than or equal to ${max}`;

    if (!this.assertNumber()) {
      return this;
    }

    if (this.value > max) {
      this.errors.maxLength = errorMessage;
    }

    return this;
  }

  private assertNumber(): boolean {
    const isStringNumber = !isNumber(this.value) && !isNaN(+this.value);
    return (
      !isNullOrUndefined(this.value) &&
      !isNaN(this.value) &&
      (isNumber(this.value) || isStringNumber)
    );
  }

  ifTrue(
    callbackFn: (value: number) => boolean,
    errorKey: string,
    errorMessage: string,
  ): NumericValidationBuilder {
    this.builder.ifTrue(callbackFn, errorKey, errorMessage);
    return this;
  }

  ifFalse(
    callbackFn: (value: number) => boolean,
    errorKey: string,
    errorMessage: string,
  ): NumericValidationBuilder {
    this.builder.ifFalse(callbackFn, errorKey, errorMessage);
    return this;
  }

  isRequired(): NumericValidationBuilder {
    this.builder.isRequired();
    return this;
  }

  withMessage(message: string, property?: string): NumericValidationBuilder {
    this.builder.withMessage(message, property);
    return this;
  }

  ignoreWhen(callbackFn: (value: number) => boolean): NumericValidationBuilder {
    this.builder.ignoreWhen(callbackFn);
    return this;
  }

  addErrors(): NumericValidationBuilder {
    this.builder.addErrors();
    return this;
  }

  build(): ValidationErrors {
    return this.builder.build();
  }
}
