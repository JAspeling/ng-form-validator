import 'prismjs';
import 'prismjs/components/prism-json.min.js';
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
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

import { AppComponent } from './app.component';
import { DateModule } from './date/date.module';
import { SharedModule } from './shared/shared.module';
import { StringModule } from './string/string.module';
import {
  GumshoeDirective,
  ScrollSpyDirective,
} from './shared/scrollspy.directive';
import { NumericModule } from './numeric/numeric.module';
// import { Tokens } from 'marked';

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  // renderer.blockquote = ({ tokens }: Tokens.Blockquote) =>
  //   `<blockquote class="blockquote"><p>' + ${tokens.join('')} + '</p></blockquote>`;
  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };

  return {
    renderer,
    gfm: true,
    breaks: false,
    pedantic: false,
  };
}

@NgModule({
  declarations: [AppComponent, ScrollSpyDirective, GumshoeDirective],
  imports: [
    BrowserModule,
    HttpClientModule,

    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      },
    }),

    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    SharedModule,
    DateModule,
    StringModule,
    NumericModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
