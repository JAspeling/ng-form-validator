import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StringValidator } from '../../../../projects/ng-form-validator-builder/src/public-api';
// import { StringValidator } from '@validator-builder';

@Component({
    selector: 'app-string-demo',
    templateUrl: './string-demo.component.html'
})
export class StringDemoComponent implements OnInit {

    form: FormGroup;

    constructor() { }

    ngOnInit(): void {
        this.initializeDateForm()
    }

    private initializeDateForm() {

        this.form = new FormBuilder().group({
            email: ['', StringValidator.email('Invalid email!')]
        })
    }
}
