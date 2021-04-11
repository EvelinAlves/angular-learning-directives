import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostListener('mouseenter') mouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseOut() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
