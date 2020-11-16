import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        BrowserAnimationsModule,
        CollapseModule.forRoot(),
        BsDatepickerModule.forRoot(),
    ],
    declarations: [
        InputWrapperComponent
    ],
    exports: [
        InputWrapperComponent
    ],
})
export class SharedModule { }