import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { getFirstErrorFromControl } from '../../../projects/ng-form-validator-builder/src/lib/form-utils';
import { Guid } from '../shared/guid';

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

    constructor() { }

    ngOnInit(): void {
    }

    get formControl(): AbstractControl {
        return this.form?.controls[this.name];
    }

    firstError = getFirstErrorFromControl(this.formControl);

    toggleState(): void {
        this.showState = !this.showState;
    }

    get state(): any {
        return {
            name: this.name,
            errors: this.formControl.errors,
            status: this.formControl.status,
            value: this.formControl.value
        }
    }
}
