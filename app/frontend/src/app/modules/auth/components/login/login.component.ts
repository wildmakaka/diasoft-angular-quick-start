import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import AuthService from 'src/app/modules/auth/services/auth.service';
import { UserInterface } from 'src/app/modules/auth/types/user.interface';

@Component({
  selector: 'app-dia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  public loggedInUser$: Observable<UserInterface[]> =
    this.authService.getLoggedInUser();

  constructor(private readonly authService: AuthService) {}

  @Input()
  isAuthenticated: boolean;

  ngOnInit(): void {}

  public login(username: string): void {
    // this.authService.login(username);
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
