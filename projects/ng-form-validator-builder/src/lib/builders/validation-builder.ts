import { FormControl } from '@angular/forms';

import { DateValidationBuilder } from './date-validation-builder';
import { NumericValidationBuilder } from './numeric-validation-builder';
import { StringValidationBuilder } from './string-validation-builder';
import { ValidationBuilderBase } from './validation-builder-base';
import { IValidationBuilder } from './validation-builder.interface';

export class ValidationBuilder extends ValidationBuilderBase implements IValidationBuilder {
    get numeric(): NumericValidationBuilder {
        super.initialize();
        return new NumericValidationBuilder(this);
    }
    get string(): StringValidationBuilder {
        super.initialize();
        return new StringValidationBuilder(this);
    }
    get date(): DateValidationBuilder {
        super.initialize();
        return new DateValidationBuilder(this);
    }

    constructor(control: FormControl) {
        super();
        this.baseControl = control;
    }
}
