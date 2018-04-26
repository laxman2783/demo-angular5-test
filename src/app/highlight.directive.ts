import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
   constructor(private el: ElementRef) { }
  color:string ='green';
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("red");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}