import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { ValidationBuilder } from '../builders/validation-builder';


export class NumericValidator {
    public static range(minLength: number, maxLength: number, errorMessage?: string): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .numeric
                .isValidNumber(errorMessage)
                .minValueAllowed(minLength, errorMessage)
                .maxValueAllowed(maxLength, errorMessage)
                .build();
        };
    }

    public static greaterThanZero(errorMessage?: string): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .numeric
                .isValidNumber(errorMessage)
                .greaterThanZero(errorMessage)
                .lessThanMax(errorMessage)
                .build();
        };
    }

    public static greaterThanOrEqualToZero(errorMessage?: string): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .numeric
                .isValidNumber(errorMessage)
                .greaterThanOrEqualTo(0, errorMessage)
                .lessThanMax(errorMessage)
                .build();
        };
    }

    public static lessThanMax(errorMessage?: string): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .numeric
                .isValidNumber(errorMessage)
                .lessThanMax(errorMessage)
                .build();
        };
    }

    public static isWholeNumber(errorMessage?: string): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .numeric
                .isValidNumber(errorMessage)
                .isWholeNumber(errorMessage)
                .build();
        };
    }
}
