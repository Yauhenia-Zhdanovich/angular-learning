import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';

import { CourseItem } from '../../shared/interfaces/course-interface';
import { CourseService } from '../../core/services/course.service';
import { OnDeleteDialogComponent } from './on-delete-dialog/on-delete-dialog.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [CourseService]
})

export class CourseListComponent implements OnInit {
  public coursesList: Array<CourseItem>;
  public courseService: CourseService;
  public dialog: MatDialog;
  public dialogRef: MatDialogRef<OnDeleteDialogComponent>;

  constructor(
    courseService: CourseService,
    dialog: MatDialog,
  ) {
    this.courseService = courseService;
    this.dialog = dialog;
  }

  public ngOnInit(): void {
    this.getCourses();
  }

  public onDelete(event: number): void {
    console.log(event);
    this.dialogRef = this.dialog.open(OnDeleteDialogComponent, {height: '350px', width: '350px'});
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courseService.removeItem(event);
      }
    });
  }

  public getCourses(): void {
    this.coursesList = this.courseService.getCourses();
  }
}
