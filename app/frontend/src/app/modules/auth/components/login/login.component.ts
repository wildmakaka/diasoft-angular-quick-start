import { Component, Input } from '@angular/core';
import AuthService from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-dia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  loggedInUser: string = '';

  constructor(private readonly authService: AuthService) {}

  @Input()
  isAuthenticated: boolean;

  ngOnInit(): void {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  public login(username: string): void {
    this.authService.login(username);
  }

  public logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
  }

  public isAuth(): boolean {
    return this.authService.isAuth();
  }

  public getLoggedInUser(): void {
    this.authService.getLoggedInUser();
  }
} // End of Class;
