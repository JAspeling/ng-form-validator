import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { ValidationBuilder } from '../builders/validation-builder';
import { isNullOrUndefined } from '../utils';

export class PercentageValidator {
  public static isPositiveOrNullValue(): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .ignoreWhen((val) => isNullOrUndefined(val))
        .isValidNumber()
        .maxValueAllowed(100)
        .minValueAllowed(0)
        .withMessage('A valid percentage value is required')
        .build();
    };
  }

  public static isValid(minRange: number, maxRange: number): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber()
        .minValueAllowed(minRange)
        .maxValueAllowed(maxRange)
        .withMessage('A valid percentage value is required')
        .build();
    };
  }

  public static isPositive(): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber()
        .minValueAllowed(0)
        .maxValueAllowed(100)
        .withMessage('A valid, positive percentage value is required')
        .build();
    };
  }

  public static greaterThanZero(): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).numeric
        .isValidNumber()
        .maxValueAllowed(100)
        .greaterThanZero()
        .withMessage('A valid, positive percentage value is required')
        .build();
    };
  }
}
