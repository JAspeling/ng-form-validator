import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { ValidationBuilder } from '../builders/validation-builder';


export class NumericValidator {
    public static range(minLength: number, maxLength: number): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .numeric
                .isValidNumber()
                .minValueAllowed(minLength)
                .maxValueAllowed(maxLength)
                .build();
        };
    }

    public static greaterThanZero(): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .numeric
                .isValidNumber()
                .greaterThanZero()
                .lessThanMax()
                .build();
        };
    }

    public static greaterThanOrEqualToZero(): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .numeric
                .isValidNumber()
                .greaterThanOrEqualTo(0)
                .lessThanMax()
                .build();
        };
    }

    public static lessThanMax(): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .numeric
                .isValidNumber()
                .lessThanMax()
                .build();
        };
    }

    public static isWholeNumber(): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .numeric
                .isValidNumber()
                .isWholeNumber()
                .build();
        };
    }
}
