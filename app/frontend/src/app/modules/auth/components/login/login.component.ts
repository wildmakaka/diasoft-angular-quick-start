import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import AuthService from 'src/app/modules/auth/services/auth.service';
import { CurrentUserInterface } from 'src/app/modules/auth/types/currentUser.interface';

@Component({
  selector: 'app-dia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  public loggedInUser$: Observable<CurrentUserInterface[]> | null =
    this.authService.getLoggedInUser();

  constructor(private readonly authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
} // End of Class;
