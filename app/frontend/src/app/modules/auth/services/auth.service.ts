import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_SERVER } from 'src/app/constants';
import { UserInterface } from 'src/app/modules/auth/types/user.interface';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  public login(userLogin: string, userPassword: string): void {
    const loggedInUser = this.httpClient.get<UserInterface[]>(
      `${API_SERVER}/users?email=${userLogin}&password=${userPassword}`
    );
    loggedInUser.subscribe((data) => {
      if (data.length === 1) {
        localStorage.setItem('token', data[0].fakeToken);
      } else {
        console.error('[App] User not found or any issues');
      }
    });
  }

  public logout(): void {
    const loggedInUser = localStorage.getItem('username');
    console.log('Logout ' + loggedInUser);
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  public isAuth(): boolean {
    const check = localStorage.getItem('token');
    return !!check;
  }

  public getLoggedInUser(): string {
    const loggedInUser = localStorage.getItem('username');
    return loggedInUser || '';
  }
} // The End of Class;
