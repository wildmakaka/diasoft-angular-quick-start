import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import {
  updateCourseAction,
  updateCourseFailureAction,
  updateCourseSuccessAction,
} from 'src/app/modules/courses/store/actions/updateCourse.action';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Injectable()
export class UpdateCourseEffect {
  updateArticle = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCourseAction),
      switchMap(({ updateCourse }) => {
        return this.coursesService.updateCourse(updateCourse).pipe(
          map((course: CourseInterface) => {
            return updateCourseSuccessAction({ course });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateCourseFailureAction({ errors: errorResponse.error.errors })
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
