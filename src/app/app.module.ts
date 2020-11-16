import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { DateModule } from './date/date.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,

        TabsModule.forRoot(),
        
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        SharedModule,
        DateModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
