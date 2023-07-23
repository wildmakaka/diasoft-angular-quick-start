import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import '@angular/common/locales/global/ru';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { StyleClassModule } from 'primeng/styleclass';
import AppRoutingModule from 'src/app/modules/app/app-routing.module';
import AppComponent from 'src/app/modules/app/components/app/app.component';
import AuthModule from 'src/app/modules/auth/auth.module';
import { AuthInterceptor } from 'src/app/modules/auth/interceptors/auth.interceptor';
import { AuthGuardService } from 'src/app/modules/auth/services/auth.guard';
import CoursesModule from 'src/app/modules/courses/courses.module';
import FooterComponent from 'src/app/shared/components/footer/footer.component';
import HeaderComponent from 'src/app/shared/components/header/header.component';
import LoadingComponent from 'src/app/shared/components/loading/loading.component';
import NotFoundComponent from 'src/app/shared/components/not-found/not-found.component';

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
    HttpClientModule,
    ProgressSpinnerModule,
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    LoadingComponent,
  ],
  providers: [
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
