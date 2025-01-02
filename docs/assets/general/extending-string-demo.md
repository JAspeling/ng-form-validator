```ts
import { StringValidator, ValidationBuilder } from '@validator-builder';
import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class MyStringValidator {
  static passwordComplexity(exclusion: string, errorMessage?: string): ValidatorFn {
    return (control: FormControl): ValidationErrors => {
      return new ValidationBuilder(control).string
        .minLengthAllowed(6, 'Password needs to be longer than 6 characters')
        .maxLengthAllowed(15, 'Password cannot be longer than 15 characters')
        .regex(/[A-Z]/, 'Needs at least one capital letter')
        .regex(/[^A-Za-z]/, 'Needs at least one numeric or special character')
        .ifTrue((val) => val === exclusion, 'exclusion', errorMessage || 'New value cannot be the same as the previous value')
        .build();
    };
  }
}

// And the .ts file of the angular component:
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyStringValidator } from '../custom-string-validator';

export class ExtendingStringDemoComponent implements OnInit {
  form: FormGroup;
  password: string = 'P@ssw0rd';

  ngOnInit(): void {
    this.form = new FormBuilder().group({
      password: ['', [MyStringValidator.passwordComplexity(this.password)]],
    });
  }
}
```
