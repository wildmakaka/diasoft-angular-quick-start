import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import AuthService from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-dia-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export default class LoginFormComponent implements OnInit {
  @Output()
  isAuthenticated = new EventEmitter<boolean>();

  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  submitted = false;

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    const userLogin = this.loginForm.value.login;
    const userPassword = this.loginForm.value.password;

    this.authService.login(userLogin, userPassword);
  }
}
