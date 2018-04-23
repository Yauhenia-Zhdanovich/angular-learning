import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AuthorizationComponentModule } from './authorization';

@NgModule({
  imports: [
    CommonModule,
    AuthorizationComponentModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
})

export class HeaderModule {
}
