import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MyStringValidator } from '../custom-string-validator';

@Component({
  selector: 'app-extending-string-demo',
  templateUrl: './extending-string-demo.component.html',
  standalone: false,
})
export class ExtendingStringDemoComponent implements OnInit {
  form: UntypedFormGroup;
  password: string = 'P@ssw0rd';

  constructor() {}

  ngOnInit(): void {
    this.form = new UntypedFormBuilder().group({
      password: ['', [MyStringValidator.passwordComplexity(this.password)]],
    });
  }
}
