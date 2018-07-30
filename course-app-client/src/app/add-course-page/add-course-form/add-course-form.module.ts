import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { DatePickerModule } from './date-picker';
import { DurationSetterModule } from './duration-setter';
import { ChooserModule } from './chooser';
import { AddCourseFormComponent } from './add-course-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    DatePickerModule,
    DurationSetterModule,
    ChooserModule
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
