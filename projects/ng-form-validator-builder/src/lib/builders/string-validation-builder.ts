import { ValidationErrors } from '@angular/forms';
import { isNullOrUndefined } from 'util';

import { ValidationBuilder } from './validation-builder';
import { IValidationBuilder } from './validation-builder.interface';

export class StringValidationBuilder implements IValidationBuilder {
    get errors(): ValidationErrors {
        return this.builder.baseErrors;
    }

    get value(): any {
        return this.builder.value;
    }
    set value(val: any) {
        if (val !== this.builder.value) {
            this.builder.value = val;
        }
    }
    constructor(private readonly builder: ValidationBuilder) { }

    public minLengthAllowed(min: number, errorMessage?: string): StringValidationBuilder {
        if (this.builder.ignore || isNullOrUndefined(this.value)) { return this; }
        errorMessage = errorMessage || `Min length of ${min} characters`;

        if (this.value.length < min) {
            this.errors.minLength = `Min length of ${min} characters`;
        }

        return this;
    }

    public maxLengthAllowed(max: number, errorMessage?: string): StringValidationBuilder {
        if (this.builder.ignore || isNullOrUndefined(this.value)) { return this; }
        errorMessage = errorMessage || `Max length of ${max} characters`;

        if (this.value.length > max) {
            this.errors.maxLength = `Max length of ${max} characters`;
        }

        return this;
    }

    public range(lowerRange: number, upperRange: number, errorMessage?: string): StringValidationBuilder {
        if (this.builder.ignore || isNullOrUndefined(this.value)) { return this; }
        errorMessage = errorMessage || `Require between ${lowerRange} and ${upperRange} characters`;

        if (this.value.length < lowerRange || this.value.length > upperRange) {
            this.errors.invalidRange = `Require between ${lowerRange} and ${upperRange} characters`;
        }
        return this;
    }

    public regex(regexString: RegExp, errorMessage?: string): StringValidationBuilder {
        if (this.builder.ignore || isNullOrUndefined(this.value)) { return this; }

        errorMessage = errorMessage || 'Invalid pattern';

        if (typeof this.value === 'string') {
            if (isNullOrUndefined(this.value.match(regexString))) {
                this.errors.invalidPattern = errorMessage;
            }
        } else {
            this.errors.invalidPattern = 'Invalid object type';
        }

        return this;
    }

    ifTrue(callbackFn: (value: any) => boolean, errorKey: string, errorMessage: string): StringValidationBuilder {
        this.builder.ifTrue(callbackFn, errorKey, errorMessage);
        return this;
    }

    ifFalse(callbackFn: (value: any) => boolean, errorKey: string, errorMessage: string): StringValidationBuilder {
        this.builder.ifFalse(callbackFn, errorKey, errorMessage);
        return this;
    }

    isRequired(): StringValidationBuilder {
        this.builder.isRequired();
        return this;
    }

    withMessage(message: string, property?: string): StringValidationBuilder {
        this.builder.withMessage(message, property);
        return this;
    }

    ignoreWhen(callbackFn: (value: any) => boolean): StringValidationBuilder {
        this.builder.ignoreWhen(callbackFn);
        return this;
    }

    addErrors(): StringValidationBuilder {
        this.builder.addErrors();
        return this;
    }

    build(): ValidationErrors {
        return this.builder.build();
    }
}
