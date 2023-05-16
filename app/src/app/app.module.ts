import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import CourseComponent from './courses/course/course.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
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
    CoursesListComponent,
  ],
  imports: [
    CheckboxModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StyleClassModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
