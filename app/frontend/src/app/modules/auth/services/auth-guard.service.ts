import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, take } from 'rxjs';
import AuthService from 'src/app/modules/auth/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private readonly authService: AuthService
  ) {}

  canActivate() {
    return this.authService.isAuth().pipe(
      take(1),
      map((isAuth) => {
        if (isAuth) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}
