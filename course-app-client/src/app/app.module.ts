import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponentModule } from './home';
import { LoginPageModule } from './login-page';
import { LocalStorageService } from './core/services/local-storage.service';
import { AddCoursePageModule } from './add-course-page';
import { httpInterceptorProviders } from './core/interceptors';
import { AuthService } from './core/services/authenticity.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HomeComponentModule,
    LoginPageModule,
    AddCoursePageModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LocalStorageService,
    httpInterceptorProviders,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
