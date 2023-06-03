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
import HeaderComponent from 'src/app/shared/components/header/header.component';
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
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
