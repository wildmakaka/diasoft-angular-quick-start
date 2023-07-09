import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import AuthService from 'src/app/modules/auth/services/auth.service';
import { UserInterface } from 'src/app/modules/auth/types/user.interface';

@Component({
  selector: 'app-dia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit, OnDestroy {
  @Input()
  isAuthenticated: boolean;

  public loggedInUser: UserInterface[];

  private loggedInUserSubscription: Subscription;

  constructor(
    private router: Router,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loggedInUserSubscription = this.authService
      .getLoggedInUser()
      .subscribe((loggedInUser) => {
        this.loggedInUser = loggedInUser;
      });
  }

  ngOnDestroy(): void {
    this.loggedInUserSubscription.unsubscribe();
  }

  public login(username: string): void {
    // this.authService.login(username);
  }

  public logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  public isAuth(): boolean {
    return this.authService.isAuth();
  }

  public getLoggedInUser(): void {
    this.authService.getLoggedInUser();
  }
} // End of Class;
