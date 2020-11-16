import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from '../../projects/ng-form-validator-builder/src/public-api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    dateForm: FormGroup;

    ngOnInit(): void {
        this.initializeDateForm()
    }

    private initializeDateForm() {
        this.dateForm = new FormBuilder().group({
            date1: [''],
            date2: ['', DateValidator.isValid],
            date3: [null],
        })
    }


}
