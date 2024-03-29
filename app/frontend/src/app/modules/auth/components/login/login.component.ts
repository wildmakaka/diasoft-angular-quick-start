import { Component, OnInit } from '@angular/core';
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
export default class LoginComponent implements OnInit {
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

  public logout(): void {
    this.store.dispatch(logoutAction());
  }
} // End of Class;
