import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import AuthService from 'src/app/modules/auth/services/auth.service';
import { UserInterface } from 'src/app/modules/auth/types/user.interface';

@Component({
  selector: 'app-dia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  public loggedInUser$: Observable<UserInterface[]> | null =
    this.authService.getLoggedInUser();

  constructor(private readonly authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
} // End of Class;
