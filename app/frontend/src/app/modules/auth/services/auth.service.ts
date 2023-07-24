import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { API_SERVER } from 'src/app/constants';
import { UserInterface } from 'src/app/modules/auth/types/user.interface';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private readonly httpClient: HttpClient
  ) {}

  public login(userLogin: string, userPassword: string): void {
    this.loaderService.showLoader();
    const loggedInUser = this.httpClient.get<UserInterface[]>(
      `${API_SERVER}/users?email=${userLogin}&password=${userPassword}`
    );

    loggedInUser.subscribe((data) => {
      if (data.length === 1) {
        localStorage.setItem('token', data[0].fakeToken);
        this.router.navigate(['/courses']).then(() => {
          // window.location.reload();
        });
      } else {
        console.error('[App] User not found or any issues');
      }
    });
  }

  public logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('token');

    this.router.navigate(['/']).then(() => {
      // window.location.reload();
    });
  }

  public isAuth(): Observable<boolean> {
    return of(!!this.getToken());
  }

  public getToken(): string {
    const token = localStorage.getItem('token') || '';
    return token;
  }

  public getLoggedInUser(): Observable<UserInterface[]> | null {
    const userToken = this.getToken();
    if (!userToken) {
      return null;
    }

    return this.httpClient.get<UserInterface[]>(
      `${API_SERVER}/users?fakeToken=${userToken}`
    );
  }
} // The End of Class;
