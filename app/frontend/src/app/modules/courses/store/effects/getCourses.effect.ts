import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import {
  getCoursesAction,
  getCoursesFailureAction,
  getCoursesSuccessAction,
} from 'src/app/modules/courses/store/actions/getCourses.action';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Injectable()
export class GetCoursesEffect {
  getCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoursesAction),
      switchMap(() => {
        return this.coursesService.getCourses().pipe(
          map((courses: CourseInterface[]) => {
            return getCoursesSuccessAction({ courses });
          }),
          catchError(() => {
            return of(getCoursesFailureAction());
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
