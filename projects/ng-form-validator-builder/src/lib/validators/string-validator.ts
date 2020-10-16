import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { ValidationBuilder } from '../builders/validation-builder';

export class StringValidator {
    public static range(lowerRange: number, upperRange: number): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .string
                .range(lowerRange, upperRange)
                .build();
        };
    }

    public static maxLengthAllowed(max: number): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .string
                .maxLengthAllowed(max)
                .build();
        };
    }

    public static regex(regex: RegExp, errorMessage?: string): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .string
                .regex(regex, errorMessage)
                .build();
        };
    }
}
