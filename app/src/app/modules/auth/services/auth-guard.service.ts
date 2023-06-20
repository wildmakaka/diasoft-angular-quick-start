import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import AuthService from 'src/app/modules/auth/services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isAuth()) {
      return true;
    }
    return false;
  }
}
