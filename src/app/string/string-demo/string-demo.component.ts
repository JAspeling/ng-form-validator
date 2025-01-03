import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { StringValidator } from '@validator-builder';

@Component({
  selector: 'app-string-demo',
  templateUrl: './string-demo.component.html',
  standalone: false,
})
export class StringDemoComponent implements OnInit {
  form: UntypedFormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initializeDateForm();
  }

  private initializeDateForm(): void {
    this.form = new UntypedFormBuilder().group({
      email: ['', StringValidator.email('Invalid email!')],
      regex: [
        '',
        StringValidator.regex(
          /(simple|regex)/,
          `Must contain either words 'simple' or 'regex'!`,
        ),
      ],
      min: [
        '',
        StringValidator.minLengthAllowed(
          13,
          `Must contain at least 13 characters`,
        ),
      ],
      max: [
        '',
        StringValidator.maxLengthAllowed(
          5,
          `Must contain at most 5 characters`,
        ),
      ],
      range: [
        '',
        StringValidator.range(
          10,
          15,
          `Must contain between 10 and 15 characters`,
        ),
      ],
    });
  }
}
