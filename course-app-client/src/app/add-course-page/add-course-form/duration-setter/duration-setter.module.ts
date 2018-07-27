import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { DurationSetterComponent } from './duration-setter.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    DurationSetterComponent
  ],
  exports: [
    DurationSetterComponent
  ]
})
export class DurationSetterModule {
}
