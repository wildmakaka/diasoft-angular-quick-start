import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, take, tap } from 'rxjs';
import AuthService from 'src/app/modules/auth/services/auth.service';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from 'src/app/modules/auth/store/actions/login.action';
import { CurrentUserInterface } from 'src/app/modules/auth/types/currentUser.interface';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          take(1),
          map((currentUser: CurrentUserInterface) => {
            console.log('currentUser');
            console.log(currentUser);
            console.log('currentUser.fakeToken');
            console.log(currentUser.fakeToken);

            localStorage.setItem('token', currentUser.fakeToken);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private readonly authService: AuthService,
    private router: Router
  ) {}
}
