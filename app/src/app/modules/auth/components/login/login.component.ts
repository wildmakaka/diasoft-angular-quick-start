import { Component } from '@angular/core';
import AuthService from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-dia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  constructor(private readonly authService: AuthService) {}

  public login(): void {
    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }

  public isAuthenticated(): void {
    this.authService.isAuthenticated();
  }

  public getUserInfo(): void {
    this.authService.getUserInfo();
  }
} // End of Class;
