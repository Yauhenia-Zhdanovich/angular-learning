import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { AuthorizationComponentModule } from './authorization';
import { NavigationModule } from './navigation';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthorizationComponentModule,
    NavigationModule
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
