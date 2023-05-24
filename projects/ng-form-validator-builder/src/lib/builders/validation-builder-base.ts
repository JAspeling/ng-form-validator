import { FormControl, ValidationErrors, Validators } from '@angular/forms';

import { addErrorsToControl } from '../form-utils';
import { deleteAllPropertiesOfObject, isEmptyObject, isNullOrUndefined, isNullOrWhitespace } from '../utils';
import { IValidationBuilder } from './validation-builder-base.interface';

export class ValidationBuilderBase implements IValidationBuilder {
    baseErrors: ValidationErrors = {};
    baseControl: FormControl;
    ignore: boolean = false;

    // This value can be changed in the builder chain,
    // but it should never change the actual value of the FormControl.
    value: any;

    get controlValue(): any {
        return isNullOrUndefined(this.baseControl) ? null : this.baseControl.value;
    }

    protected initialize(): void {
        this.value = this.controlValue;
    }

    public ifTrue(callbackFn: (value: any) => boolean, errorKey: string, errorMessage: string): IValidationBuilder {
        if (this.ignore) { return this; }

        if (callbackFn(this.controlValue)) {
            this.baseErrors[errorKey] = errorMessage;
        }

        return this;
    }

    public ifFalse(callbackFn: (value: any) => boolean, errorKey: string, errorMessage: string): IValidationBuilder {
        if (this.ignore) { return this; }

        if (!callbackFn(this.controlValue)) {
            this.baseErrors[errorKey] = errorMessage;
        }

        return this;
    }

    public isRequired(errorMessage?: string): IValidationBuilder {
        if (this.ignore) { return this; }

        errorMessage = errorMessage || 'Required Field';

        const validationResult = Validators.required(this.baseControl);

        if ((!isNullOrUndefined(validationResult) && !isNullOrUndefined(validationResult.required))) {
            this.baseErrors.required = errorMessage;
        }

        return this;
    }

    public withMessage(message: string, property?: string): IValidationBuilder {
        // don't add a message if there are not errors - no validations failed.
        if (isEmptyObject(this.baseErrors) || isNullOrWhitespace(message)) {
            return this;
        }

        deleteAllPropertiesOfObject(this.baseErrors);
        this.baseErrors[property || 'error'] = message;

        return this;
    }

    public ignoreWhen(callbackFn: (value: any) => boolean): IValidationBuilder {
        if (this.ignore) { return this; }

        if (callbackFn(this.value)) {
            this.ignore = true;
        }
        return this;
    }

    public addErrors(): IValidationBuilder {
        addErrorsToControl(this.baseControl, this.build());

        return this;
    }

    public build(): ValidationErrors {
        return isEmptyObject(this.baseErrors) ? null : this.baseErrors;
    }
}
