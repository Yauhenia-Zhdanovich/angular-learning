import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSectionComponent } from './login-section.component';

@NgModule({
  imports: [
    CommonModule,
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
