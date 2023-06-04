import { Component } from '@angular/core';
import AuthService from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-dia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  constructor(private readonly authService: AuthService) {}

  isAuthenticated = false;

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuth();
  }

  public login(username: string): void {
    this.authService.login(username);
  }

  public logout(): void {
    this.authService.logout();
  }

  public isAuth(): boolean {
    return this.authService.isAuth();
  }

  public getUserInfo(): void {
    this.authService.getUserInfo();
  }
} // End of Class;
