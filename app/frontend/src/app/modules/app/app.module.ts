import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import '@angular/common/locales/global/ru';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
import { CustomSerializer } from 'src/app/store/router/custom-serializer';
import { environment } from 'src/environments/environment';
import { metaReducers, reducers } from '../../store';

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
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ maxAge: 25 }),
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
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
