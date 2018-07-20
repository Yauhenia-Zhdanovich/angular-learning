import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginSectionComponent } from './login-section.component';
import { AuthService } from '../../core/services/authenticity.service';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginSectionComponent
  ],
  exports: [
    LoginSectionComponent
  ],
  providers: [
    AuthService
  ]
})

export class LoginSectionModule {
}
