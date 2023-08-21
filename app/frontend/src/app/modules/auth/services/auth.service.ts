import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
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

  // email: 'larry@oracle.com',
  // password: 'pa55w0rd1',

  // email: 'steve@apple.com',
  // password: 'pa55w0rd1',
  public login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    this.loaderService.showLoader();
    return this.httpClient
      .get(
        `${API_SERVER}/users?email=${data.userLogin}&password=${data.userPassword}`
      )
      .pipe(
        map((res: any) => {
          const products: AuthResponseInterface = {
            id: res[0].id,
            fakeToken: res[0].fakeToken,
            firstName: res[0].firstName,
            lastName: res[0].lastName,
            email: res[0].email,
          };

          return products;
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
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
