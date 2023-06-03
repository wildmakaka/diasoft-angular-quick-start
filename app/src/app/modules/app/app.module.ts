import '@angular/common/locales/global/ru';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import BreadcrumbsComponent from 'src/app/modules/app/components/breadcrumbs/breadcrumbs.component';
import CoursesModule from 'src/app/modules/courses/courses.module';
import FooterComponent from 'src/app/shared/components/footer/footer.component';
import HeaderModule from 'src/app/shared/modules/header/header.module';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';

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
  ],
  declarations: [AppComponent, FooterComponent, BreadcrumbsComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
