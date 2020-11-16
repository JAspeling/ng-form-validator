import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DateValidator } from '../../../../projects/ng-form-validator-builder/src/public-api';

@Component({
    selector: 'app-date-demo',
    templateUrl: './date-demo.component.html',
    styleUrls: ['./date-demo.component.scss']
})
export class DateDemoComponent implements OnInit {
    dateForm: FormGroup;
    
    constructor() { }

    ngOnInit(): void {
        this.initializeDateForm()
    }

    private initializeDateForm() {
        const previousWeek: Date = new Date();
        const nextWeek: Date = new Date();
        previousWeek.setDate(new Date().getDate() - 7);
        nextWeek.setDate(new Date().getDate() + 7);

        this.dateForm = new FormBuilder().group({
            date1: [''],
            date2: ['', DateValidator.isValid()],
            date3: ['', DateValidator.notInThePast()],
            date4: ['', DateValidator.isBefore(nextWeek)],
            date5: ['', DateValidator.isAfter(nextWeek)],
            date6: ['', [
                DateValidator.isAfter(previousWeek, `Must be after ${previousWeek.toJSON().slice(0, 10)}`),
                DateValidator.isBefore(nextWeek, `Must be before ${nextWeek.toJSON().slice(0, 10)}`)]
            ]
        })
    }
}
