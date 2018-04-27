import {MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from '../course-item/course-item.module';
import { OnDeleteDialogComponent } from './on-delete-dialog/on-delete-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    CourseItemModule,
    MatDialogModule
  ],
  declarations: [
    CourseListComponent,
    OnDeleteDialogComponent
  ],
  exports: [
    CourseListComponent,
  ],
  entryComponents: [OnDeleteDialogComponent]
})

export class CourseListModule {
}
