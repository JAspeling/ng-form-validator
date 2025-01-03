import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { NumericValidator } from '@validator-builder';

@Component({
  selector: 'app-numeric-demo',
  templateUrl: './numeric-demo.component.html',
})
export class NumericDemoComponent implements OnInit {
  form: UntypedFormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initializeDateForm();
  }

  private initializeDateForm(): void {
    this.form = new UntypedFormBuilder().group({
      greaterThanZero: [
        '',
        NumericValidator.greaterThanZero('Must be greater than zero.'),
      ],
      greaterThanOrEqualToZero: [
        '',
        NumericValidator.greaterThanOrEqualToZero(
          `Must be greater than or equal to zero`,
        ),
      ],

      range: [
        '',
        [NumericValidator.range(-100, 100, 'Must be between -100 and 100!')],
      ],

      lessThan: ['', [NumericValidator.lessThan(50, 'Expected less than 50')]],
      lessThanOrEqualTo: [
        '',
        [
          NumericValidator.lessThanOrEqual(
            100,
            'Expected less than or equal to 100',
          ),
        ],
      ],
      greaterThan: [
        '',
        [NumericValidator.greaterThan(21, 'Expected greater than 21')],
      ],
      greaterThanOrEqualTo: [
        '',
        [
          NumericValidator.greaterThanOrEqual(
            18,
            'Expected greater than or equal to 18',
          ),
        ],
      ],

      lessThanMax: [
        '',
        NumericValidator.lessThanMax(
          `Must be less than max allowed integer (9000000000000000)`,
        ),
      ],
      isInteger: [55, NumericValidator.isInteger(`Expected an integer`)],
    });
  }
}
