import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumericDemoComponent } from './numeric-demo/numeric-demo.component';
import { NumericDemoCodeComponent } from './numeric-demo-code/numeric-demo-code.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
    declarations: [ NumericDemoComponent, NumericDemoCodeComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        MarkdownModule
    ],
    exports: [ NumericDemoComponent, NumericDemoCodeComponent ],
})
export class NumericModule {
}
