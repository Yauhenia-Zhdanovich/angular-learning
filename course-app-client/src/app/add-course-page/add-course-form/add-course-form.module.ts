import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddCourseFormComponent } from './add-course-form.component';

import { DatePickerModule } from './date-picker';
import { DurationSetterModule } from './duration-setter';
import { ChooserModule } from './chooser/chooser.module';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    DatePickerModule,
    DurationSetterModule,
    ReactiveFormsModule,
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
