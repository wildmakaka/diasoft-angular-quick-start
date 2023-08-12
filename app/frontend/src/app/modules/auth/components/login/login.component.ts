import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logoutAction } from 'src/app/modules/auth/store/actions/logout.action';
import { currentUserSelector } from 'src/app/modules/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/modules/auth/types/currentUser.interface';

@Component({
  selector: 'app-dia-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  currentUser$: Observable<CurrentUserInterface | null> = this.store.pipe(
    select(currentUserSelector)
  );

  // public loggedInUser$: Observable<CurrentUserInterface[]> | null =
  //   this.authService.getLoggedInUser();

  constructor(private store: Store) {}

  public logout(): void {
    this.store.dispatch(logoutAction());
  }
} // End of Class;
