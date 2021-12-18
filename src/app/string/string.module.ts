import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringDemoComponent } from './string-demo/string-demo.component';
import { StringDemoCodeComponent } from './string-demo-code/string-demo-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../shared/shared.module';
import { ExtendingStringDemoComponent } from './extending-string-demo/extending-string-demo.component';
import { ExtendingStringDemoCodeComponent } from './extending-string-demo-code/extending-string-demo-code.component';



@NgModule({
    declarations: [
        StringDemoComponent,
        StringDemoCodeComponent,
        ExtendingStringDemoComponent,
        ExtendingStringDemoCodeComponent
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
        StringDemoCodeComponent,
        ExtendingStringDemoComponent,
        ExtendingStringDemoCodeComponent
    ]
})
export class StringModule { }
