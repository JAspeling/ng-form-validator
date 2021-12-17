import { Component, OnInit, ViewChild } from '@angular/core';
import * as Gumshoe from 'gumshoejs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    headings: any[] = [];
    @ViewChild('container', { static: true }) elementRef: any;

    ngOnInit(): void {
        this.populateHeadings();
        this.headings = [ ...this.elementRef.nativeElement.children ].filter(el => el.id).map(el => ({
            id: el.id,
            text: el.innerText
        }));
        console.log(this.headings);
        setTimeout(() => {
            const spy = new Gumshoe('#gumshoe-nav a');
        });
    }

    populateHeadings(): void {
        // this.headings = $('h1').toArray().map(el => ({ id: el.id, name: el.innerText }));
    }
}
