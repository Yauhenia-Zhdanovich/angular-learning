import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from '../course-item/course-item.module';
import { OnDeleteDialogComponent } from './on-delete-dialog/on-delete-dialog.component';
import { SortByDatePipe } from '../../core/pipes/sort-by-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    CourseItemModule,
    MatDialogModule,
    MatCardModule
  ],
  declarations: [
    CourseListComponent,
    OnDeleteDialogComponent,
    SortByDatePipe,
  ],
  exports: [
    CourseListComponent,
  ],
  entryComponents: [OnDeleteDialogComponent]
})

export class CourseListModule {
}
