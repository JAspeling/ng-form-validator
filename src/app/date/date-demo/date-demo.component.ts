import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { faPooStorm, faRedo, faUndo } from '@fortawesome/free-solid-svg-icons';

import { DateValidator } from '@validator-builder';

@Component({
  selector: 'app-date-demo',
  templateUrl: './date-demo.component.html',
  standalone: false,
})
export class DateDemoComponent implements OnInit {
  dateForm: UntypedFormGroup;
  date2Actions: any[] = [
    {
      action: () => {
        const control = this.dateForm.get('date2');
        control.setValue('Some invalid value');
        control.markAsTouched();
      },
      icon: faPooStorm,
      info: 'Change the form control to something invalid!',
    },
  ];
  date3Actions: any[] = [
    {
      action: () => {
        const control = this.dateForm.get('date3');
        const previousWeek: Date = new Date();
        previousWeek.setDate(new Date().getDate() - 1);

        control.setValue(previousWeek);
        control.markAsTouched();
      },
      icon: faUndo,
      info: 'Change the date to the past!',
    },
  ];
  date4Actions: any[] = [
    {
      action: () => {
        const control = this.dateForm.get('date4');
        const futureDate: Date = new Date();
        futureDate.setDate(new Date().getDate() + 14);

        control.setValue(futureDate);
        control.markAsTouched();
      },
      icon: faRedo,
      info: 'Change the date to 2 weeks from now!',
    },
  ];
  date5Actions: any[] = [
    {
      action: () => {
        const control = this.dateForm.get('date5');
        const futureDate: Date = new Date();
        futureDate.setDate(new Date().getDate() - 14);

        control.setValue(futureDate);
        control.markAsTouched();
      },
      icon: faUndo,
      info: 'Change the date to 2 weeks ago!',
    },
  ];
  date6Actions: any[] = [
    {
      action: () => {
        const control = this.dateForm.get('date6');
        const futureDate: Date = new Date();
        futureDate.setDate(new Date().getDate() - 14);

        control.setValue(futureDate);
        control.markAsTouched();
      },
      icon: faUndo,
      info: 'Change the date to 2 weeks ago!',
    },
    {
      action: () => {
        const control = this.dateForm.get('date6');
        const futureDate: Date = new Date();
        futureDate.setDate(new Date().getDate() + 14);

        control.setValue(futureDate);
        control.markAsTouched();
      },
      icon: faRedo,
      info: 'Change the date to 2 weeks from now!',
    },
  ];
  date7Actions: any[] = [
    {
      action: () => {
        const control = this.dateForm.get('date7');
        control.setValue('Some invalid value');
        control.markAsTouched();
      },
      icon: faPooStorm,
      info: 'Change the form control to something invalid!',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initializeDateForm();
  }

  private initializeDateForm(): void {
    const today = new Date(Date.now());
    const previousWeek: Date = new Date();
    const nextWeek: Date = new Date();
    previousWeek.setDate(new Date().getDate() - 7);
    nextWeek.setDate(new Date().getDate() + 7);

    this.dateForm = new UntypedFormBuilder().group({
      date1: [today],
      date2: [today, DateValidator.isValid()],
      date3: [today, DateValidator.notInThePast()],
      date4: [today, DateValidator.isBefore(nextWeek)],
      date5: [today, DateValidator.isAfter(nextWeek)],
      date6: [
        today,
        [
          DateValidator.isAfter(
            previousWeek,
            `Must be after ${previousWeek.toJSON().slice(0, 10)}`,
          ),
          DateValidator.isBefore(
            nextWeek,
            `Must be before ${nextWeek.toJSON().slice(0, 10)}`,
          ),
        ],
      ],
      date7: [
        today,
        [DateValidator.isValid('This is a custom error message :)')],
      ],
    });
  }
}
