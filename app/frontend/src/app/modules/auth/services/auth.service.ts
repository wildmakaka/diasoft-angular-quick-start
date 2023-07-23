import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, take } from 'rxjs';
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

  public getLoggedInUser(): Observable<UserInterface> | null {
    const userToken = this.getToken();
    if (!userToken) {
      return null;
    }

    const res = this.httpClient
      .get<UserInterface[]>(`${API_SERVER}/users?fakeToken=${userToken}`)
      .pipe(take(1));

    res.subscribe((data) => {
      console.log('data[0]');
      console.log(data[0]);
    });

    return of({
      id: 1,
      firstName: 'Someone',
      lastName: 'Visitor',
      fakeToken: 'token',
      email: 'abcd@mail.ru',
      password: 'pass',
    });
  }
} // The End of Class;
