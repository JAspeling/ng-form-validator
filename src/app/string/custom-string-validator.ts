import { StringValidator, ValidationBuilder } from '@validator-builder';
import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MyStringValidator extends StringValidator {
  static cannotBe(exclusion: string, errorMessage?: string): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).string
        .ifTrue(
          (val) => val === exclusion,
          'exclusion',
          errorMessage || 'New value cannot be the same as the previous value',
        )
        .build();
    };
  }

  static passwordComplexity(
    exclusion: string,
    errorMessage?: string,
  ): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).string
        .minLengthAllowed(6, 'Password needs to be longer than 6 characters')
        .maxLengthAllowed(15, 'Password cannot be longer than 15 characters')
        .regex(/[A-Z]/, 'Needs at least one capital letter')
        .regex(/[^A-Za-z]/, 'Needs at least one numeric or special character')
        .ifTrue(
          (val) => val === exclusion,
          'exclusion',
          errorMessage || 'New value cannot be the same as the previous value',
        )
        .build();
    };
  }
}
