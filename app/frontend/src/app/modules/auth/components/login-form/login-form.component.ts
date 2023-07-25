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

  constructor(private readonly authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.login, this.password);
  }
}
