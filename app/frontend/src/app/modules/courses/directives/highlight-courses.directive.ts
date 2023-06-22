import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlightCourses]',
})
export default class HighlightCoursesDirective implements AfterViewInit {
  @Input('appHighlightCourses') creationDate: Date = new Date();

  constructor(
    private readonly renderer: Renderer2,
    private readonly element: ElementRef
  ) {}

  public ngAfterViewInit(): void {
    const currentDate = new Date();

    if (this.creationDate > currentDate) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '5px solid #20b6dd');
    } else if (
      this.creationDate < currentDate &&
      this.creationDate >=
        new Date(currentDate.setDate(currentDate.getDate() - 14))
    ) {
      const [child] = this.element.nativeElement.children;
      this.renderer.setStyle(child, 'border', '5px solid #2FEB09');
    }
  }
}
