import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { AuthorizationComponentModule } from './authorization';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
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
