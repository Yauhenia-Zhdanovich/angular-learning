import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
  ],
  declarations: [
    DatePickerComponent,
  ],
  exports: [
    DatePickerComponent
  ]
})

export class DatePickerModule {
}
