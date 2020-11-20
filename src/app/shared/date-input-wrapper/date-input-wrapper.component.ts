import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { faChevronDown, faChevronUp, faCoffee } from '@fortawesome/free-solid-svg-icons';

import {
    getFirstErrorFromControl,
    touchedControlHasError,
} from '@validator-builder';
import { MarkdownService } from 'ngx-markdown';
import { Guid } from '../guid';

@Component({
    selector: 'app-date-input-wrapper',
    templateUrl: './date-input-wrapper.component.html'
})
export class DateInputWrapperComponent implements OnInit {
    faChevronDown = faChevronDown;
    faChevronUp = faChevronUp;
    
    id: string = Guid.newGuid();

    @Input() form: FormGroup;
    @Input() name: string;
    @Input() label: string;
    @Input() markdownSrc: string;

    @Input() actions: { action: () => void, icon: string, info: string }[] = [];

    showState: boolean = false;

    get firstError(): string {
        return getFirstErrorFromControl(this.formControl);
    }

    get hasError(): boolean {
        return touchedControlHasError(this.formControl);
    }

    get state(): any {
        return {
            name: this.name,
            errors: this.formControl.errors,
            status: this.formControl.status,
            value: this.formControl.value
        }
    }

    get formControl(): AbstractControl {
        return this.form?.controls[this.name];
    }

    constructor(private readonly markdown: MarkdownService) { }

    ngOnInit(): void {
    }

    toggleState(): void {
        this.showState = !this.showState;
    }

    updateState(): void {
        this.markdown.highlight();
    }
}
