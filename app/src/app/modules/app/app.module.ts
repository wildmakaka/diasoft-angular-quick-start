import '@angular/common/locales/global/ru';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import AppComponent from 'src/app/modules/app/components/app/app.component';
import AuthModule from 'src/app/modules/auth/auth.module';
import { AuthGuardService } from 'src/app/modules/auth/services/auth-guard.service';
import CoursesModule from 'src/app/modules/courses/courses.module';
import AppRoutingModule from 'src/app/routes/app-routing.module';
import FooterComponent from 'src/app/shared/components/footer/footer.component';
import HeaderComponent from 'src/app/shared/components/header/header.component';

@NgModule({
  imports: [
    CheckboxModule,
    AppRoutingModule,
    BrowserModule,
    ButtonModule,
    StyleClassModule,
    CardModule,
    CoursesModule,
    AuthModule,
  ],
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export default class AppModule {}
