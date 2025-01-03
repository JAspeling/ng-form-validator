import 'prismjs';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-markdown.min.js';
import 'prismjs/components/prism-markup.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords.min.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

import { CommonModule } from '@angular/common';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {
  MarkdownModule
} from 'ngx-markdown';

import { AppComponent } from './app.component';
import { DateModule } from './date/date.module';
import { NumericModule } from './numeric/numeric.module';
import {
  GumshoeDirective,
  ScrollSpyDirective,
} from './shared/scrollspy.directive';
import { SharedModule } from './shared/shared.module';
import { StringModule } from './string/string.module';

@NgModule({
  declarations: [AppComponent, ScrollSpyDirective, GumshoeDirective],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DateModule,
    StringModule,
    NumericModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
