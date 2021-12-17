```html
<div class="form-group"
     [formGroup]="form">
    <label>My form control</label>

    <div class="input-group">
        <input class="form-control"
               [formControlName]="'myControl'"
               [class.input-validation-error]="hasError">
    </div>
    <div *ngIf="hasError"
         class="field-validation-error">
        {{firstError}}
    </div>
</div>
```

> With the following bindings on the control:

```typescript
import { Component, Input, OnInit } from '@angular/core';
import {
    getFirstErrorFromControl,
    touchedControlHasError,
} from '@validator-builder';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-text-input-wrapper',
    templateUrl: './text-input-wrapper.component.html'
})
export class TextInputWrapperComponent implements OnInit {
    form: FormGroup;

    constructor() {
        this.form = new FormBuilder().group({
            myControl: ['', [ /* Add validator here */]]
        })
    }

    get firstError(): string {
        return getFirstErrorFromControl(this.formControl);
    }

    get hasError(): boolean {
        return touchedControlHasError(this.formControl);
    }
}
```
