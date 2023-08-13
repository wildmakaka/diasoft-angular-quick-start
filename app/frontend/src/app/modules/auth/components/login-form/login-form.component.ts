import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginAction } from 'src/app/modules/auth/store/actions/login.action';
import { LoginRequestInterface } from 'src/app/modules/auth/types/loginRequest.interface';

@Component({
  selector: 'app-dia-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export default class LoginFormComponent {
  public login: string = '';
  public password: string = '';

  constructor(private store: Store) {}

  onSubmit() {
    const request: LoginRequestInterface = {
      userLogin: this.login,
      userPassword: this.password,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
