import { Component, OnInit } from '@angular/core';
import AuthService from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  isAuthenticated = this.authService.isAuth();

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}

  isAuthenticatedCheck(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }
}
