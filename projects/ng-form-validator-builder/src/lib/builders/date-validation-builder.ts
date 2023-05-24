import { FormControl, ValidationErrors } from '@angular/forms';

import { IValidationBuilder } from './validation-builder.interface';
import { isDate } from 'is-what';
import { ValidationBuilderBase } from './validation-builder-base';
import { dateIsInThePast } from '../utils';

export class DateValidationBuilder implements IValidationBuilder {
    get errors(): ValidationErrors {
        return this.builder.baseErrors;
    }

    get control(): FormControl {
        return this.builder.baseControl;
    }

    get value(): any {
        return this.builder.value;
    }
    set value(val: any) {
        if (val !== this.builder.value) {
            this.builder.value = val;
        }
    }

    constructor(private readonly builder: ValidationBuilderBase) { }

    public isValidDate(errorMessage?: string): DateValidationBuilder {
        errorMessage = errorMessage || 'A valid date value is required';
        if (!isDate(this.value) || JSON.stringify(this.value) === "null") {
            this.errors.invalidDate = errorMessage;
        }
        return this;
    }

    public isNotInThePast(errorMessage?: string): DateValidationBuilder {
        errorMessage = errorMessage || 'Date cannot be in the past.';
        const date = new Date(this.value);
        if (dateIsInThePast(date)) {
            this.errors.dateIsInThePast = errorMessage;
        }

        return this;
    }

    public isBefore(valuationDate: Date, errorMessage?: string): DateValidationBuilder {
        errorMessage = errorMessage || 'A valid date value is required';
        const date = new Date(this.value);

        if (date > valuationDate) {
            this.errors.exceedsValuationDate = errorMessage;
        }
        return this;
    }

    public isAfter(valuationDate: Date, errorMessage?: string): DateValidationBuilder {
        errorMessage = errorMessage || 'A valid date value is required';
        const date = new Date(this.value);

        if (date < valuationDate) {
            this.errors.precedeValuationDate = errorMessage;
        }
        return this;
    }

    ifTrue(callbackFn: (value: any) => boolean, errorKey: string, errorMessage: string): DateValidationBuilder {
        this.builder.ifTrue(callbackFn, errorKey, errorMessage);
        return this;
    }

    ifFalse(callbackFn: (value: any) => boolean, errorKey: string, errorMessage: string): DateValidationBuilder {
        this.builder.ifFalse(callbackFn, errorKey, errorMessage);
        return this;
    }

    isRequired(): DateValidationBuilder {
        this.builder.isRequired();
        return this;
    }

    withMessage(message: string, property?: string): DateValidationBuilder {
        this.builder.withMessage(message, property);
        return this;
    }

    ignoreWhen(callbackFn: (value: any) => boolean): DateValidationBuilder {
        this.builder.ignoreWhen(callbackFn);
        return this;
    }

    addErrors(): DateValidationBuilder {
        this.builder.addErrors();
        return this;
    }

    build(): ValidationErrors {
        return this.builder.build();
    }
}
