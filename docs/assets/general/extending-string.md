For instance, lets look at the `regex` validation function on the `StringValidator`:

### StringValidator
```ts
import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { ValidationBuilder } from '../builders/validation-builder';

export class StringValidator {
    public static regex(regex: RegExp, errorMessage?: string): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .string
                .regex(regex, errorMessage)
                .build();
        };
    }
}
```

### Extending from a string Validator

Let's build a string validator that will make sure that the value in a form is not the same as another value. Think of a scenario where a password needs to be changed.

#### Implementing the `cannotBe` Validator

```ts
import { StringValidator } from './string-validator';
import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MyStringValidator extends StringValidator {                        // 1
    static cannotBe(exclusion: string, errorMessage?: string): ValidatorFn {    // 2
        return (control: FormControl): ValidationErrors => {                    // 3
            return new ValidationBuilder(control)                               // 4
                .string                                                         // 5 .. n
                .ifTrue((val) => val === exclusion, 'exclusion', errorMessage || 'New value cannot be the same as the previous value')  // 6
                .build()                                                        // 7
        }
    }
}
```

#### Explanation
1. Create a new class that will extend the validator of the data type we are expecting to work with. `StringValidator` for `string`, `NumericValidator` for `number` or `DateValidator` for `Date`
2. Define a static method on the class that will be called with the required parameters, and an error message that can be overridden.
    1. This method returns a `ValidatorFn`, a function that accepts a `FormControl` as a parameter and returns `ValidationErrors`
3. Return an instance of the `ValidatorFn`
4. Construct your validation builder
5. Set the data type to use
6. Use the builder pattern to string along a set of pre-defined validators to use.
7. `build()` the validator.
    1. This will run all the functions and return an error object if any error needs to be returned, or `null` if there are no errors.

#### Usage

```ts
import { GenericValidator } from './generic-validator';

private buildForm(): void {
    const fb = new FormBuilder();
    const currentPassword = this.password;

    this.form = fb.group({
        password: [ currentPassword, [ GenericValidator.isRequired('Password is required') ] ],
        newPassword: [ currentPassword, [
            GenericValidator.isRequired('New password is required'),
            MyStringValidator.cannotBe(currentPassword, 'Cannot be your previous password!') ] 
        ]
    });
}
```

### PasswordComplexity validator example
You can mix a bunch of validators to build a new one. For instance, if we take a look at a password validator with the following requirements:
1. It needs to be at least 6 digits long.
2. Cannot be longer than 15 characters
3. It requires at least one Capital letter.
4. It requires at least one special character or numeric value.
5. It cannot be the same as a previous value.

#### Implementing the `passwordComplexity` Validator

```ts
import { StringValidator } from './string-validator';
import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MyStringValidator extends StringValidator {
    static passwordComplexity(exclusion: string, errorMessage?: string): ValidatorFn {
        return (control: FormControl): ValidationErrors => {
            return new ValidationBuilder(control)
                .string
                .minLengthAllowed(6, 'Password needs to be longer than 6 characters')
                .maxLengthAllowed(15, 'Password cannot be longer than 15 characters')
                .regex(/[A-Z]/, 'Needs at least one capital letter')
                .regex(/[^A-Za-z]/, 'Needs at least one numeric or special character')
                .ifTrue((val) => val === exclusion, 'exclusion', errorMessage || 'New value cannot be the same as the previous value')
                .build()
        }
    }
}
```

#### Usage of passwordComplexity
```ts
private buildForm(): void {
    const fb = new FormBuilder();
    const currentPassword = this.password;
    
    this.form = fb.group({
        password: [ currentPassword, [ GenericValidator.isRequired('Password is required') ] ],
        newPassword: [ currentPassword, [ MyStringValidator.passwordComplexity(currentPassword) ] ]
    });
}
```
