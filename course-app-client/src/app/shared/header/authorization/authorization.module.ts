import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthorizationComponent } from './authorization.component';
import { AuthService } from '../../../core/services/authenticity.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AuthorizationComponent
  ],
  exports: [
    AuthorizationComponent
  ],
  providers: [
    AuthService
  ]
})

export class AuthorizationComponentModule {
}
