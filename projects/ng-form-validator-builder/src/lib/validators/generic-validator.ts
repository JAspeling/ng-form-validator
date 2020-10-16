import { FormControl, ValidationErrors } from '@angular/forms';
import { ValidationBuilder } from '../builders/validation-builder';

export class GenericValidator {
    public static isRequired(control: FormControl): ValidationErrors {
        return new ValidationBuilder(control)
            .isRequired()
            .build();
    }
}
