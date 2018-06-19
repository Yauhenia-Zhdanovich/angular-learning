import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AuthorizationComponent } from './authorization.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AuthorizationComponent
  ],
  exports: [
    AuthorizationComponent
  ],
})

export class AuthorizationComponentModule {
}
