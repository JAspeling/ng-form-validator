import 'prismjs';
import 'prismjs/components/prism-markdown.min.js';
import 'prismjs/components/prism-markup.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords.min.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MarkdownModule } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { DateModule } from './date/date.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,

        TabsModule.forRoot(),
        MarkdownModule.forRoot({
            loader: HttpClient
        }),

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
