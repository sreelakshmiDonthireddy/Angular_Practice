import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.backgroundColor='rgb(127,200,200)'
    this.element.nativeElement.style.padding='0.5rem'
   }

}
