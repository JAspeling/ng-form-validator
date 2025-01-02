import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import { SharedModule } from '../shared/shared.module';
import { DateDemoCodeComponent } from './date-demo-code/date-demo-code.component';
import { DateDemoComponent } from './date-demo/date-demo.component';

@NgModule({
  declarations: [DateDemoComponent, DateDemoCodeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MarkdownModule.forChild(),

    SharedModule,
  ],
  exports: [DateDemoComponent, DateDemoCodeComponent],
})
export class DateModule {}
