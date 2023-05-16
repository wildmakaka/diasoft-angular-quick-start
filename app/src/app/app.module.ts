import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import CourseComponent from './course/course.component';
import FooterComponent from './footer/footer.component';
import HeaderComponent from './header/header.component';
import SearchComponent from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CourseComponent,
    FooterComponent,
  ],
  imports: [
    CheckboxModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StyleClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
