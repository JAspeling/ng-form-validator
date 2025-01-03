import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Gumshoe from 'gumshoejs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  headings: {id: string, text: string}[] = [];
  @ViewChild('container', { static: true }) elementRef: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.populateHeadings();

    setTimeout(() => {
      new Gumshoe('#gumshoe-nav a');
    });
  }

  populateHeadings() {
    const children = Array.from(this.elementRef.nativeElement.children);
    const headingElements = children.filter(
      (child): child is HTMLHeadingElement =>
        child instanceof HTMLHeadingElement,
    );
    this.headings = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.innerText,
    }));
    console.log(this.headings);
  }
}
