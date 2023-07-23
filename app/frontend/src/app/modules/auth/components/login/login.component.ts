import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import AuthService from 'src/app/modules/auth/services/auth.service';
import { UserInterface } from 'src/app/modules/auth/types/user.interface';

@Component({
  selector: 'app-dia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit, OnDestroy {
  public isAuthenticated: boolean;

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

  public logout(): void {
    this.authService.logout();
  }

  public isAuth(): Observable<boolean> {
    return this.authService.isAuth();
  }

  public getLoggedInUser(): void {
    this.authService.getLoggedInUser();
  }
} // End of Class;
