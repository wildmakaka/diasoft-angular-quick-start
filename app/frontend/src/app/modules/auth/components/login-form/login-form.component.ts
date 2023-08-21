import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginAction } from 'src/app/modules/auth/store/actions/login.action';
import { LoginRequestInterface } from 'src/app/modules/auth/types/loginRequest.interface';

@Component({
  selector: 'app-dia-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export default class LoginFormComponent {
  constructor(private store: Store) {}

  onSubmit(form: NgForm) {
    const request: LoginRequestInterface = {
      userLogin: form.value.login,
      userPassword: form.value.password,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
