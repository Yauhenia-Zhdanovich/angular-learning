import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponentModule } from './home';
import { LoginPageModule } from './login-page';
import { LocalStorageService } from './core/services/local-storage.service';
import { AddCoursePageModule } from './add-course-page';
import { HttpService } from './core/services/secureHttp.service';

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
    HttpModule
  ],
  providers: [
    LocalStorageService,
    {
      provide: HttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
