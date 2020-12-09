import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  GREY_COLOR = "red";
  GREEN_COLOR = "green"
  @Input('appBorderCard') borderColor;
  constructor(private element: ElementRef) {
    this.setBorder(this.GREEN_COLOR)
    this.setHeight(180)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.GREY_COLOR)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.GREEN_COLOR)
  }

  private setBorder(color: string) {
    const border = "solid 4px " + color;
    this.element.nativeElement.style.border = border
  }

  private setHeight(hight: number) {
    this.element.nativeElement.style.height = hight + "px"
  }
}
