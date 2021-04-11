import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'span[backgroundYellow]'
})
export class BackgroundYellowDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    // console.log(`elementRef: ${this.elementRef}`);
    // this.elementRef.nativeElement.style.backgroundColor = 'Yellow';
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

}
