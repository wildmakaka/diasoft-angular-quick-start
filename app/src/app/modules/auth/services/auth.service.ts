import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  constructor() {}

  public login(username: string): void {
    console.log('Login');
    localStorage.setItem('username', username);
    localStorage.setItem('token', '123456');
  }

  public logout(): void {
    const loggedInUser = localStorage.getItem('username');
    console.log('Logout ' + loggedInUser);
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    const check = localStorage.getItem('username');
    return !!check;
  }

  public getUserInfo(): string {
    const loggedInUser = localStorage.getItem('username');
    console.log('User is ' + loggedInUser);
    return loggedInUser || '';
  }
} // The End of Class;
