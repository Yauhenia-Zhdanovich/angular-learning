import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseItemComponent } from './course-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CourseItemComponent
  ],
  exports: [
    CourseItemComponent
  ],
})

export class CourseItemModule {
}
