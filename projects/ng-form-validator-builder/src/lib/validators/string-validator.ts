import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { ValidationBuilder } from '../builders/validation-builder';

export class StringValidator {
  public static range(
    lowerRange: number,
    upperRange: number,
    errorMessage?: string,
  ): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).string
        .range(lowerRange, upperRange, errorMessage)
        .build();
    };
  }

  public static maxLengthAllowed(
    max: number,
    errorMessage?: string,
  ): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).string
        .maxLengthAllowed(max, errorMessage)
        .build();
    };
  }

  public static minLengthAllowed(
    min: number,
    errorMessage?: string,
  ): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).string
        .minLengthAllowed(min, errorMessage)
        .build();
    };
  }

  public static email(errorMessage?: string): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).string
        .regex(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          errorMessage,
        )
        .build();
    };
  }

  public static regex(regex: RegExp, errorMessage?: string): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).string
        .regex(regex, errorMessage)
        .build();
    };
  }
}
