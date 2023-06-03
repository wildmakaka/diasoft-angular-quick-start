import '@angular/common/locales/global/ru';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import CoursesModule from 'src/app/modules/courses/courses.module';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import BreadcrumbsComponent from './breadcrumbs/breadcrumbs.component';
import FooterComponent from './footer/footer.component';
import HeaderComponent from './header/header.component';

@NgModule({
  imports: [
    CheckboxModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StyleClassModule,
    CardModule,
    BreadcrumbModule,
    FormsModule,
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
