import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
})

export class LoginSectionModule {
}
