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
  @Input('appHighlightCourses') creationDate: Date;

  constructor(
    private readonly element: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  public ngAfterViewInit(): void {
    const [child] = this.element.nativeElement.children;

    if (this.isUpcomingCourse()) {
      this.renderer.setStyle(child, 'border', '5px solid #20b6dd');
    } else if (this.isNewCourse()) {
      this.renderer.setStyle(child, 'border', '5px solid #2FEB09');
    }
  }

  isUpcomingCourse() {
    return new Date(this.creationDate) > new Date();
  }

  isNewCourse() {
    return (
      new Date(this.creationDate) < new Date() &&
      new Date(this.creationDate) >=
        new Date(new Date().setDate(new Date().getDate() - 14))
    );
  }
}
