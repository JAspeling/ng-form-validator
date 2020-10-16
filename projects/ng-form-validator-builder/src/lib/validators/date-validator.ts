import { FormControl, ValidationErrors } from '@angular/forms';
import { ValidationBuilder } from '../builders/validation-builder';

export class DateValidator {

    public static isValid(control: FormControl): ValidationErrors {
        return new ValidationBuilder(control)
            .date
            .isValidDate()
            .build();
    }

    public static notInThePast(control: FormControl): ValidationErrors {
        return new ValidationBuilder(control)
            .date
            .isValidDate()
            .isNotInThePast()
            .withMessage('Date cannot be in the past.', 'dateIsInThePast')
            .build();
    }

    public static isBefore(date: Date): ValidationErrors {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .date
                .isValidDate()
                .isBefore(date)
                .build();
        };
    }
}
