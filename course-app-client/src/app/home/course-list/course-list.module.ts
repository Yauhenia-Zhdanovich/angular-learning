import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from '../course-item/course-item.module';
import { OnDeleteDialogComponent } from './on-delete-dialog/on-delete-dialog.component';
import { SortByDatePipe } from '../../core/pipes/sort-by-date.pipe';
import { CourseService } from '../../core/services/course.service';

@NgModule({
  imports: [
    CommonModule,
    CourseItemModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    CourseListComponent,
    OnDeleteDialogComponent,
    SortByDatePipe,
  ],
  exports: [
    CourseListComponent,
  ],
  providers: [CourseService],
  entryComponents: [OnDeleteDialogComponent]
})

export class CourseListModule {
}
