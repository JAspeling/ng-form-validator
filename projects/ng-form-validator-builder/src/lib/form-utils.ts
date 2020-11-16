import { AbstractControl, ControlContainer, FormGroup, ValidationErrors } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { isEmptyObject } from './utils';

export function getFirstErrorFromControl(control: AbstractControl): string {
    if (isNullOrUndefined(control) || isNullOrUndefined(control.errors)) {
        return null;
    }
    const key = Object.keys(control.errors)[0];
    return control.errors[key];
}

export function addError(group: FormGroup, controlName: string, errorKey: string, error: string): void {
    if (!assertFormGroup(group, errorKey, controlName, true) || !assertError(group, errorKey, controlName, true)) {
        return;
    }
    if (group.controls[controlName].errors) {
        group.controls[controlName].errors[errorKey] = error;
    } else {
        const validationError: ValidationErrors = {};
        validationError[errorKey] = error;
        group.controls[controlName].setErrors(validationError);
    }
}

export function addErrorsToControl(control: AbstractControl, errors: ValidationErrors): void {
    if (isNullOrUndefined(errors) || isEmptyObject(errors)) {
        return;
    }

    for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
            addErrorToControl(control, key, errors[key]);
        }
    }
}

function assertControl(control: AbstractControl, errorKey: string, isAdding: boolean): boolean {
    if (isNullOrUndefined(control)) {
        console.warn(
            `Can't ${isAdding ? 'add' : 'remove'} error '${errorKey}' on the form control, because the control is undefined.`
        );
        return false;
    }
    return true;
}

export function addErrorToControl(control: AbstractControl, key: string, error: string): void {
    if (!assertControl(control, key, true)) {
        return;
    }

    if (control.errors) {
        control.errors[key] = error;
    } else {
        const validationError: ValidationErrors = {};
        validationError[key] = error;
        control.setErrors(validationError);
    }
}

function assertError(group: FormGroup, errorKey: string, controlName: string, isAdding: boolean): boolean {
    if (isNullOrUndefined(group.controls[controlName])) {
        console.warn(`Can't ${isAdding ? 'add' : 'remove'} error '${errorKey}' on the form control` +
            ` [${controlName}] because [${controlName}] does not exist on the formGroup`, group);
        return false;
    }
    return true;
}

function assertFormGroup(group: FormGroup, errorKey: string, controlName: string, isAdding: boolean): boolean {
    if (isNullOrUndefined(group)) {
        console.warn(
            `Can't ${isAdding ? 'add' : 'remove'} error '${errorKey}' on the form control [${controlName}] because the FormGroup passed into the function is undefined.`
        );
        return false;
    }
    return true;
}

export function touchedControlHasError(control: AbstractControl): boolean {
    if (isNullOrUndefined(control)) {
        return false;
    }

    return control.invalid && !control.pending && !control.disabled && control.touched;
}
