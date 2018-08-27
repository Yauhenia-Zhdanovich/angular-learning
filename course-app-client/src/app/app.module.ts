import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './core/interceptors';
import { StoreModule } from '@ngrx/store';

import { reducers } from './core/store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './core/services/authenticity.service';
import { AppComponent } from './app.component';
import { AddCoursePageModule } from './add-course-page';
import { LocalStorageService } from './core/services/local-storage.service';
import { LoginPageModule } from './login-page';
import { HomeComponentModule } from './home';
import { NotFoundModule } from './not-found';
import { AuthGuardService } from './core/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeComponentModule,
    LoginPageModule,
    AddCoursePageModule,
    NotFoundModule,
    StoreModule.forRoot({})
  ],
  providers: [
    LocalStorageService,
    httpInterceptorProviders,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
