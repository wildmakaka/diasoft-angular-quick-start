import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import {
  addCourseAction,
  addCourseFailureAction,
  addCourseSuccessAction,
} from 'src/app/modules/courses/store/actions/addCourse.action';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Injectable()
export class AddCourseEffect {
  createArticle = createEffect(() =>
    this.actions$.pipe(
      ofType(addCourseAction),
      switchMap(({ course }) => {
        return this.coursesService.addCourse(course).pipe(
          map((course: CourseInterface) => {
            return addCourseSuccessAction({ course });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              addCourseFailureAction({ errors: errorResponse.error.errors })
            );
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
