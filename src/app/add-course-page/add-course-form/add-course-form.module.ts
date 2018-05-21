import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseFormComponent } from './add-course-form.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AddCourseFormComponent
  ],
  exports: [
    AddCourseFormComponent
  ]
})

export class AddCourseFormModule {
}
