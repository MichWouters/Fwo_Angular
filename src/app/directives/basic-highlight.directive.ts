import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    @Input() defaultColour: string = 'green';
    @Input() highlightcolour: string = 'yellow';
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = this.defaultColour;
    }

    @HostListener('mouseenter') onMouseOver() {
        this.highlight(this.highlightcolour);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(this.defaultColour);
    }

    @HostBinding('')

    private highlight(color: string) {
        this.elementRef.nativeElement.style.backgroundColor = color;

    }
}