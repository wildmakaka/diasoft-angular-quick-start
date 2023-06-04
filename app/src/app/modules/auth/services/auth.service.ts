import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private loggedInUser: string = '';

  constructor() {}

  public login(username: string): void {
    console.log('Login');
    this.loggedInUser = username;
    localStorage.setItem('username', this.loggedInUser);
    localStorage.setItem('token', '123456');
  }

  public logout(): void {
    const loggedInUser = localStorage.getItem('username');
    console.log('Logout ' + loggedInUser);
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    return !!this.loggedInUser;
  }

  public getUserInfo(): string {
    const loggedInUser = localStorage.getItem('username');
    console.log('User is ' + loggedInUser);
    return loggedInUser || '';
  }
} // The End of Class;
