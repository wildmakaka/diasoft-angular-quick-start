import '@angular/common/locales/global/ru';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import AppRoutingModule from 'src/app/modules/app-routing.module';
import AppComponent from 'src/app/modules/app/components/app/app.component';
import AuthModule from 'src/app/modules/auth/auth.module';
import CoursesModule from 'src/app/modules/courses/courses.module';
import BreadcrumbsComponent from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import FooterComponent from 'src/app/shared/components/footer/footer.component';
import HeaderModule from 'src/app/shared/modules/header/header.module';

@NgModule({
  imports: [
    CheckboxModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StyleClassModule,
    CardModule,
    BreadcrumbModule,
    CoursesModule,
    HeaderModule,
    AuthModule,
  ],
  declarations: [AppComponent, FooterComponent, BreadcrumbsComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
