import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCoursePageComponent } from './add-course-page.component';
import { HeaderModule } from '../shared/header';
import { AddCourseFormModule } from './add-course-form';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    AddCourseFormModule,
  ],
  declarations: [
    AddCoursePageComponent
  ],
  exports: [
    AddCoursePageComponent,
  ]
})
export class AddCoursePageModule {
}
