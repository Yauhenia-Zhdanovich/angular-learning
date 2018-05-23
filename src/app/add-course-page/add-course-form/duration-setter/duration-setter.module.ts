import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationSetterComponent } from './duration-setter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

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
