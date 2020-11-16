import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

import {
    getFirstErrorFromControl,
    touchedControlHasError,
} from '../../../../projects/ng-form-validator-builder/src/public-api';
import { Guid } from '../guid';

@Component({
    selector: 'app-input-wrapper',
    templateUrl: './input-wrapper.component.html',
    styleUrls: ['./input-wrapper.component.scss']
})
export class InputWrapperComponent implements OnInit {
    id: string = Guid.newGuid();

    @Input() form: FormGroup;
    @Input() name: string;
    @Input() label: string;

    showState: boolean = false;

    get firstError(): string {
        return getFirstErrorFromControl(this.formControl);
    }

    get hasError(): boolean {
        return touchedControlHasError(this.formControl);
    }

    get state(): any {
        return {
            name: this.name,
            errors: this.formControl.errors,
            status: this.formControl.status,
            value: this.formControl.value
        }
    }

    get formControl(): AbstractControl {
        return this.form?.controls[this.name];
    }

    constructor() { }

    ngOnInit(): void {
    }

    toggleState(): void {
        this.showState = !this.showState;
    }
}
