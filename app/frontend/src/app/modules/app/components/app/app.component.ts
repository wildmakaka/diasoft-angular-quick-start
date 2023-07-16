import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import AuthService from 'src/app/modules/auth/services/auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  public showLoader$: Observable<boolean> = this.loaderService.loadingAction$;
  isAuthenticated = this.authService.isAuth();

  constructor(
    private loaderService: LoaderService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loaderService.hideLoader();
  }

  isAuthenticatedCheck(isAuthenticated: boolean) {
    this.isAuthenticated = of(isAuthenticated);
  }
}
