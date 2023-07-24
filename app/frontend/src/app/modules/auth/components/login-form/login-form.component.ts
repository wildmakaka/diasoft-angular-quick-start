import { Component } from '@angular/core';
import AuthService from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-dia-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export default class LoginFormComponent {
  public login: string = '';
  public password: string = '';
  // public isValidForm: boolean = false;

  // submitted = false;

  constructor(private readonly authService: AuthService) {}

  onSubmit() {
    // console.log('Submit');
    // console.log(this.login);
    // console.log(this.password);
    // const userLogin = this.login;
    // const userPassword = this.password;
    // const userLogin = this.login.value.login;
    // const userPassword = this.password.value.password;
    this.authService.login(this.login, this.password);
  }
}
