import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import CoursesService from 'src/app/modules/courses/services/courses.service';
import {
  getCourseAction,
  getCourseFailureAction,
  getCourseSuccessAction,
} from 'src/app/modules/courses/store/actions/getCourse.action';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Injectable()
export class GetArticleEffect {
  getCourse = createEffect(() =>
    this.actions$.pipe(
      ofType(getCourseAction),
      switchMap(({ courseId }) => {
        return this.coursesService.getCourseById(courseId).pipe(
          map((course: CourseInterface) => {
            return getCourseSuccessAction({ course });
          }),
          catchError(() => {
            return of(getCourseFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private readonly coursesService: CoursesService
  ) {}
}
