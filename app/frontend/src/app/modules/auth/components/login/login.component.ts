import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import AuthService from 'src/app/modules/auth/services/auth.service';
import { UserInterface } from 'src/app/modules/auth/types/user.interface';

@Component({
  selector: 'app-dia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  @Input()
  isAuthenticated: boolean;

  public loggedInUser$: Observable<UserInterface[]> =
    this.authService.getLoggedInUser();

  constructor(
    private router: Router,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {}

  public login(username: string): void {
    // this.authService.login(username);
  }

  public logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  public isAuth(): boolean {
    return this.authService.isAuth();
  }

  public getLoggedInUser(): void {
    this.authService.getLoggedInUser();
  }
} // End of Class;
