import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
    declarations: [
        AppComponent,
        InputWrapperComponent
    ],
    imports: [
        BrowserModule,

        BrowserAnimationsModule,
        BsDatepickerModule.forRoot(),
        CollapseModule.forRoot(),
        
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
