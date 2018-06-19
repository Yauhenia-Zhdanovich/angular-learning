import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseFormComponent } from './add-course-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DatePickerModule } from './date-picker';
import { DurationSetterModule } from './duration-setter';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    DatePickerModule,
    DurationSetterModule
  ],
  declarations: [
    AddCourseFormComponent
  ],
  exports: [
    AddCourseFormComponent,
  ]
})

export class AddCourseFormModule {
}
