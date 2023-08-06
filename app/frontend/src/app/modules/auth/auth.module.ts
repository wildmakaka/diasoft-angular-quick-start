import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { LoginEffect } from 'src/app/modules/auth/store/effects/login.effect';
import { LogoutEffect } from 'src/app/modules/auth/store/effects/logout.effect';
import { reducers } from 'src/app/modules/auth/store/reducers';
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
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffect, LogoutEffect]),
  ],
  declarations: [LoginComponent, LoginFormComponent],
  exports: [LoginComponent, LoginFormComponent],
})
export default class AuthModule {}
