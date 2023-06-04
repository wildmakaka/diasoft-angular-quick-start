import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import AuthModule from 'src/app/modules/auth/auth.module';
import HeaderComponent from 'src/app/shared/modules/header/components/header/header.component';

@NgModule({
  imports: [CommonModule, AuthModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export default class HeaderModule {}
