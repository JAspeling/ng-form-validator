import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MyStringValidator } from '../custom-string-validator';

@Component({
  selector: 'app-extending-string-demo',
  templateUrl: './extending-string-demo.component.html',
})
export class ExtendingStringDemoComponent implements OnInit {
  form: FormGroup;
  password: string = 'P@ssw0rd';

  constructor() {}

  ngOnInit(): void {
    this.form = new FormBuilder().group({
      password: ['', [MyStringValidator.passwordComplexity(this.password)]],
    });
  }
}
