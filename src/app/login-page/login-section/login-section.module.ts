import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/authenticity.service';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginSectionComponent } from './login-section.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
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
