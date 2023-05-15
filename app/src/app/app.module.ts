import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import CourseComponent from './course/course.component';
import FooterComponent from './footer/footer.component';
import HeaderComponent from './header/header.component';
import HomeComponent from './home/home.component';
import LogoComponent from './logo/logo.component';
import SearchComponent from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    HomeComponent,
    CourseComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
