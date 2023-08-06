import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { API_SERVER } from 'src/app/constants';
import { AuthResponseInterface } from 'src/app/modules/auth/types/authResponse.interface';
import { CurrentUserInterface } from 'src/app/modules/auth/types/currentUser.interface';
import { LoginRequestInterface } from 'src/app/modules/auth/types/loginRequest.interface';
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

  public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    this.loaderService.showLoader();
    return this.httpClient.get<AuthResponseInterface>(
      `${API_SERVER}/users?email=${data.userLogin}&password=${data.userPassword}`
    );
  }

  public logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('token');

    // this.router.navigate(['/']).then(() => {
    //   window.location.reload();
    // });
  }

  public isAuth(): Observable<boolean> {
    return of(!!this.getToken());
  }

  public getToken(): string {
    const token = localStorage.getItem('token') || '';
    return token;
  }

  public getLoggedInUser(): Observable<CurrentUserInterface[]> | null {
    const userToken = this.getToken();
    if (!userToken) {
      return null;
    }

    return this.httpClient.get<CurrentUserInterface[]>(
      `${API_SERVER}/users?fakeToken=${userToken}`
    );
  }
} // The End of Class;
