import { Directive,ElementRef ,Input} from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {

  constructor(private element:ElementRef) {
   
  }
  @Input('appMyCustomDirective') set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
