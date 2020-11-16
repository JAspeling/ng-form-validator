import { Component, OnInit, ViewChild } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
    selector: 'app-date-demo-code',
    templateUrl: './date-demo-code.component.html',
    styleUrls: ['./date-demo-code.component.scss']
})
export class DateDemoCodeComponent implements OnInit {

    constructor(private readonly markdownService: MarkdownService) { }

    ngOnInit(): void {
    }

    markdown = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
  - Unordered list
  - Another unordered bullet point

### Blockquote
> Blockquote to the max`;
}
