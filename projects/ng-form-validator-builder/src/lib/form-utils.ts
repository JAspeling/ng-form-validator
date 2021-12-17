import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { isNullOrUndefined } from 'util';

import { isEmptyObject } from './utils';

/* -------------------------------------------------------------------------- */
/*                               Error handling                               */
/* -------------------------------------------------------------------------- */

/**
 * Gets the first error object from a control if it contains any errors, otherwise return null.
 * @param control The AbstractControl to check for errors
 */
export function getFirstErrorFromControl(control: AbstractControl): string {
    if (isNullOrUndefined(control) || isNullOrUndefined(control.errors)) {
        return null;
    }
    const key = Object.keys(control.errors)[0];
    return control.errors[key];
}

/**
 * Adds an error to a form control (AbstractControl)
 * @param errorKey The key of the error
 * @param error The error string
 */
export function addError(control: AbstractControl, errorKey: string, error: string): void {
    if (!assertControl(control, errorKey, true) || !assertError(control, errorKey, true)) {
        return;
    }
    if (control.errors) {
        control.errors[errorKey] = error;
    } else {
        const validationError: ValidationErrors = {};
        validationError[errorKey] = error;
        control.setErrors(validationError);
    }
}

/**
 * Adds multiple Validation errors to a form control (AbstractControl).
 * @param control The control on which to add the errors
 * @param errors The ValidationErrors to add to the control.
 */
export function addErrorsToControl(control: AbstractControl, errors: ValidationErrors): void {
    if (isNullOrUndefined(errors) || isEmptyObject(errors)) {
        return;
    }

    for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
            addError(control, key, errors[key]);
        }
    }
}

/**
 * Check to see if the Form Control is touched, and contains an error (is Invalid)
 * @param control The control under question
 */
export function touchedControlHasError(control: AbstractControl): boolean {
    if (isNullOrUndefined(control)) {
        return false;
    }

    return control.invalid && !control.pending && !control.disabled && control.touched;
}

/* -------------------------------------------------------------------------- */
/*                                  Assertion                                 */
/* -------------------------------------------------------------------------- */

/**
 * Makes sure the control is defined.
 */
function assertControl(control: AbstractControl, errorKey: string, isAdding: boolean): boolean {
    if (isNullOrUndefined(control)) {
        console.warn(
            `Can't ${isAdding ? 'add' : 'remove'} error '${errorKey}' on the form control, because the control is undefined.`
        );
        return false;
    }
    return true;
}

/**
 * Checks whether an error can be added to an AbstractControl.
 * @param control The AbstractControl on which to add the error
 * @param errorKey The key (property) of the error
 * @param isAdding Whether you are trying to add or remove an error from the control.
 */
function assertError(control: AbstractControl, errorKey: string, isAdding: boolean): boolean {
    if (isNullOrUndefined(control)) {
        console.warn(`Can't ${isAdding ? 'add' : 'remove'} error '${errorKey}' on the form control because it is undefined.`);
        return false;
    }
    return true;
}

/**
 * Marks the whole form group (Including its sub-groups) as touched.
 * @param formGroup The form group under question.
 */
export function markAsTouchDeep(formGroup: FormGroup | AbstractControl) {
    (<any>Object).values((formGroup as FormGroup).controls).forEach((control: AbstractControl) => {
        control.markAsTouched();

        if (control['controls']) {
            markAsTouchDeep(control);
        }
    });
};
