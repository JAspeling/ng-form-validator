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

    public minLengthAllowed(min: number): StringValidationBuilder {
        if (this.builder.ignore || isNullOrUndefined(this.value)) { return this; }

        if (this.value.length < min) {
            this.errors.minLength = `Min length of ${min} characters`;
        }

        return this;
    }

    public maxLengthAllowed(max: number): StringValidationBuilder {
        if (this.builder.ignore || isNullOrUndefined(this.value)) { return this; }

        if (this.value.length > max) {
            this.errors.maxLength = `Max length of ${max} characters`;
        }

        return this;
    }

    public range(lowerRange: number, upperRange: number): StringValidationBuilder {
        if (this.builder.ignore || isNullOrUndefined(this.value)) { return this; }

        if (this.value.length < lowerRange || this.value.length > upperRange) {
            this.errors.invalidRange = `Require between ${lowerRange} and ${upperRange} characters`;
        }
        return this;
    }

    public regex(regexString: RegExp, errorMessage?: string): StringValidationBuilder {
        if (this.builder.ignore || isNullOrUndefined(this.value)) { return this; }

        errorMessage = errorMessage || 'Invalid pattern';
        let matches: RegExpExecArray;
        const errors: string[] = [];

        while ((matches = regexString.exec(this.value)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (matches.index === regexString.lastIndex) {
                regexString.lastIndex++;
            }

            matches.forEach((match, groupIndex) => {
                errors.push(match);
            });
        }

        if (!isNullOrUndefined(errors) && errors.length > 0) {
            this.errors.invalidPattern = errorMessage;
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
