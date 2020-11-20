import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MarkdownModule } from 'ngx-markdown';

import { DateInputWrapperComponent } from './date-input-wrapper/date-input-wrapper.component';
import { TextInputWrapperComponent } from './text-input-wrapper/text-input-wrapper.component';


@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        BrowserAnimationsModule,
        CollapseModule.forRoot(),
        BsDatepickerModule.forRoot(),
        MarkdownModule.forChild(),
        FontAwesomeModule
    ],
    declarations: [
        DateInputWrapperComponent,
        TextInputWrapperComponent
    ],
    exports: [
        DateInputWrapperComponent,
        TextInputWrapperComponent
    ],
})
export class SharedModule { }
