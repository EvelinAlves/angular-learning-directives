import { Directive, HostListener, HostBinding, /*ElementRef, Renderer2*/ } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color', 'yellow',
      );*/
      this.backgroundColor = 'yellow'
  };
  
  @HostListener('mouseleave') onMouseOut(){
    /*this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color', 'white',
      );*/
      this.backgroundColor = 'white'
  };

  // @HostBinding('style.backgroundColor') backgroundColor: string | undefined;


  private backgroundColor!: string;
  @HostBinding('style.backgroundColor') get setColor() {
    //Pode ser incluida alguma manutenção
    return this.backgroundColor;
  }


  constructor(
    // private elementRef: ElementRef,
    // private renderer2: Renderer2
  ) { }

}
