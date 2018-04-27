import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponentModule } from './home';
import { LoginPageModule } from './login-page';
import { LocalStorageService } from './core/services/local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeComponentModule,
    LoginPageModule,
    BrowserAnimationsModule,
  ],
  providers: [ LocalStorageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
