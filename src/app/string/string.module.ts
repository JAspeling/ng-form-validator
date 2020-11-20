import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringDemoComponent } from './string-demo/string-demo.component';
import { StringDemoCodeComponent } from './string-demo-code/string-demo-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        StringDemoComponent,
        StringDemoCodeComponent
    ],
    imports: [
        CommonModule,

        FormsModule,
        ReactiveFormsModule,

        MarkdownModule.forChild(),

        SharedModule,
    ],
    exports: [
        StringDemoComponent,
        StringDemoCodeComponent
    ]
})
export class StringModule { }
