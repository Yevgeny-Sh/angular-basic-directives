import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

}
