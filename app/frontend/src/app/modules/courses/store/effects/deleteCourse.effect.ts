import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import {
  deleteCourseAction,
  deleteCourseFailureAction,
  deleteCourseSuccessAction,
} from 'src/app/modules/courses/store/actions/deleteCourse.action';

@Injectable()
export class DeleteCourseEffect {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCourseAction),
      switchMap(({ course }) => {
        return this.coursesService.removeCourse(course).pipe(
          map(() => {
            return deleteCourseSuccessAction();
          }),
          catchError(() => {
            return of(deleteCourseFailureAction());
          })
        );
      })
    )
  );

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteCourseSuccessAction),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private readonly coursesService: CoursesService,
    private router: Router
  ) {}
}
