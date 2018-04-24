import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { HeaderModule } from '../shared/header';
import { FooterModule } from '../shared/footer';
import { LoginSectionModule} from './login-section';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    LoginSectionModule,
  ],
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ]
})

export class LoginPageModule {
}
