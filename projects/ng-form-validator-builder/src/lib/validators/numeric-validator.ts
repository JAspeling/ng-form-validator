import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { ValidationBuilder } from '../builders/validation-builder';

export class NumericValidator {
  public static range(
    minLength: number,
    maxLength: number,
    errorMessage?: string,
  ): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber(errorMessage)
        .minValueAllowed(minLength, errorMessage)
        .maxValueAllowed(maxLength, errorMessage)
        .build();
    };
  }

  public static greaterThanZero(errorMessage?: string): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber(errorMessage)
        .greaterThanZero(errorMessage)
        .lessThanMax(errorMessage)
        .build();
    };
  }

  public static greaterThanOrEqualToZero(errorMessage?: string): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber(errorMessage)
        .greaterThanOrEqualTo(0, errorMessage)
        .lessThanMax(errorMessage)
        .build();
    };
  }

  public static lessThanMax(errorMessage?: string): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber(errorMessage)
        .lessThanMax(errorMessage)
        .build();
    };
  }

  public static lessThan(
    maxLength: number,
    errorMessage?: string,
  ): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber(errorMessage)
        .lessThanMax(errorMessage)
        .lessThan(maxLength, errorMessage)
        .build();
    };
  }

  public static lessThanOrEqual(
    maxLength: number,
    errorMessage?: string,
  ): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber(errorMessage)
        .lessThanMax(errorMessage)
        .lessThanOrEqualTo(maxLength, errorMessage)
        .build();
    };
  }

  public static greaterThan(
    minLength: number,
    errorMessage?: string,
  ): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber(errorMessage)
        .lessThanMax(errorMessage)
        .greaterThan(minLength, errorMessage)
        .build();
    };
  }

  public static greaterThanOrEqual(
    minLength: number,
    errorMessage?: string,
  ): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber(errorMessage)
        .lessThanMax(errorMessage)
        .greaterThanOrEqualTo(minLength, errorMessage)
        .build();
    };
  }

  public static isInteger(errorMessage?: string): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber(errorMessage)
        .isInteger(errorMessage)
        .build();
    };
  }
}
