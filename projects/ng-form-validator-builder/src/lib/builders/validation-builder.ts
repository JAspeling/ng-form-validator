import { UntypedFormControl } from '@angular/forms';

import { DateValidationBuilder } from './date-validation-builder';
import { NumericValidationBuilder } from './numeric-validation-builder';
import { StringValidationBuilder } from './string-validation-builder';
import { ValidationBuilderBase } from './validation-builder-base';
import { IValidationBuilder } from './validation-builder.interface';
import { BooleanValidationBuilder } from './boolean-validation-builder';

export class ValidationBuilder<T>
  extends ValidationBuilderBase<T>
  implements IValidationBuilder<T>
{
  get numeric(): NumericValidationBuilder {
    super.initialize();
    return new NumericValidationBuilder(this as ValidationBuilder<number>);
  }
  get string(): StringValidationBuilder {
    super.initialize();
    return new StringValidationBuilder(this as ValidationBuilder<string>);
  }
  get date(): DateValidationBuilder {
    super.initialize();
    return new DateValidationBuilder(this as ValidationBuilder<Date>);
  }
  get boolean(): BooleanValidationBuilder {
    super.initialize();
    return new BooleanValidationBuilder(this as ValidationBuilder<boolean>);
  }

  constructor(control: UntypedFormControl) {
    super();
    this.baseControl = control;
  }
}
