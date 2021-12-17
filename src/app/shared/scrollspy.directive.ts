// tslint:disable:directive-selector

import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    Output,
    SimpleChanges
} from '@angular/core';

@Directive({
    selector: '[scrollSpy]'
})
export class ScrollSpyDirective {

    @Input() public spiedTags = [];
    @Output() public sectionChange = new EventEmitter<string>();
    private currentSection: string;

    constructor(private elementRef: ElementRef) {
        console.log('Scrollspy', this);
    }

    @HostListener('window:scroll', [ '$event' ])
    onScroll(event: any): void {
        let currentSection: string;
        const children = this.elementRef.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }

}

@Directive({
    selector: '[gumshoe]'
})
export class GumshoeDirective implements OnChanges {
    @Input('gumshoe') currentSection: string;

    constructor(private el: ElementRef) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['gumshoe']) {
            console.log(this);
        }
    }


}
