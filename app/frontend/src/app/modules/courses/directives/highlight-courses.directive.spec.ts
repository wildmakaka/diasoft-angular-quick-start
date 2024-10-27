import { ElementRef, Renderer2 } from '@angular/core';
import HighlightCoursesDirective from 'src/app/modules/courses/directives/highlight-courses.directive';

describe('HighlightCoursesDirective', () => {
  let directive: HighlightCoursesDirective;
  const { build, element, renderer } = setup<HighlightCoursesDirective>();

  beforeEach(() => {
    directive = build();
  });

  afterEach(() => {
    renderer.setStyle.calls.reset();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should highlight by green border when course is new (creationDate < currentDate && creationDate >= currentDate – 14)', () => {
    directive.creationDate = new Date(
      new Date().setDate(new Date().getDate() - 1)
    );
    directive.ngAfterViewInit();

    expect(renderer.setStyle).toHaveBeenCalledOnceWith(
      {},
      'border',
      '5px solid #2FEB09'
    );
  });

  it('should highlight by blue border when course is upcoming (creationDate > currentDate)', () => {
    directive.creationDate = new Date(
      new Date().setDate(new Date().getDate() + 1)
    );
    directive.ngAfterViewInit();

    expect(renderer.setStyle).toHaveBeenCalledOnceWith(
      {},
      'border',
      '5px solid #20b6dd'
    );
  });
});

function setup<T>(): {
  default: () => any;
  build: () => T;
  [key: string]: any;
} {
  const element = { nativeElement: { children: [{}] } } as ElementRef;
  const renderer = {
    setStyle: jasmine.createSpy('setStyle'),
  } as unknown as Renderer2;
  const builder = {
    renderer,
    element,
    default(): any {
      return builder;
    },
    build(): any {
      return new HighlightCoursesDirective(element, renderer);
    },
  };
  return builder;
}
