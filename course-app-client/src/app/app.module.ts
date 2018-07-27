import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './core/interceptors';

import { AuthService } from './core/services/authenticity.service';
import { AppComponent } from './app.component';
import { AddCoursePageModule } from './add-course-page';
import { LocalStorageService } from './core/services/local-storage.service';
import { LoginPageModule } from './login-page';
import { HomeComponentModule } from './home';

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
    ReactiveFormsModule
  ],
  providers: [
    LocalStorageService,
    httpInterceptorProviders,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
