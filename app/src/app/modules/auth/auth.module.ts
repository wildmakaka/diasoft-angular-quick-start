import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import LoginFormComponent from './components/login-form/login-form.component';
import LoginComponent from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PanelModule,
    ButtonModule,
  ],
  declarations: [LoginComponent, LoginFormComponent],
  exports: [LoginComponent, LoginFormComponent],
})
export default class AuthModule {}
