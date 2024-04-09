import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidationBuilder } from '../builders/validation-builder';

export class BooleanValidator {
    public static isRequired(error: string = 'Required Field'): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .boolean
                .isRequired(error)
                .build();
        };
    }
}
