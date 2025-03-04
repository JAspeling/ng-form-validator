import { UntypedFormControl, ValidationErrors } from '@angular/forms';
import { ValidationBuilder } from '../builders/validation-builder';

export class DateValidator {
  public static isValid(
    errorMessage: string = 'A valid date value is required',
  ): ValidationErrors {
    return (control: UntypedFormControl): ValidationErrors => {
      return new ValidationBuilder(control).date
        .isValidDate(errorMessage)
        .build();
    };
  }

  public static notInThePast(
    errorMessage: string = 'Date cannot be in the past.',
  ): ValidationErrors {
    return (control: UntypedFormControl): ValidationErrors => {
      return new ValidationBuilder(control).date
        .isValidDate()
        .isNotInThePast(errorMessage)
        .build();
    };
  }

  public static isBefore(
    date: Date,
    errorMessage: string = 'A valid date value is required',
  ): ValidationErrors {
    return (control: UntypedFormControl): ValidationErrors => {
      return new ValidationBuilder(control).date
        .isValidDate()
        .isBefore(date, errorMessage)
        .build();
    };
  }

  public static isAfter(
    date: Date,
    errorMessage: string = 'A valid date value is required',
  ): ValidationErrors {
    return (control: UntypedFormControl): ValidationErrors => {
      return new ValidationBuilder(control).date
        .isValidDate()
        .isAfter(date, errorMessage)
        .build();
    };
  }
}
