import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import AuthService from 'src/app/modules/auth/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private readonly authService: AuthService
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuth()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
