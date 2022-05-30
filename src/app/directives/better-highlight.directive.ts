import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input() highlightColor: string = '';
  @Input() defaultColor: string = 'white';

  constructor(private elementRef: ElementRef) { }

  private highlightText(color: string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') onMouseOver(){
    this.highlightText(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlightText(this.defaultColor);
  }

}
