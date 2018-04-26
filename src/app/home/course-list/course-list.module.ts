import {MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from '../course-item/course-item.module';

@NgModule({
  imports: [
    CommonModule,
    CourseItemModule,
    MatDialogModule
  ],
  declarations: [
    CourseListComponent,
  ],
  exports: [
    CourseListComponent,
  ],
})

export class CourseListModule {
}
