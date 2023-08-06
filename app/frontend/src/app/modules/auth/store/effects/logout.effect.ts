import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import AuthService from 'src/app/modules/auth/services/auth.service';
import { logoutAction } from 'src/app/modules/auth/store/actions/logout.action';

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.authService.logout();
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
