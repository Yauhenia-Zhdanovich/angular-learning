import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy
} from '@angular/core';

import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';

import { CourseItem } from '../../shared/interfaces/course-interface';
import { CourseService } from '../../core/services/course.service';
import { OnDeleteDialogComponent } from './on-delete-dialog/on-delete-dialog.component';
import { CourseSearchPipe } from '../../core/pipes/course-search.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [
    CourseService,
    CourseSearchPipe,
  ]
})

export class CourseListComponent implements OnInit, OnChanges, OnDestroy {
  @Input('searchValue')
  public searchValue: string;
  public coursesList: Array<CourseItem> = [];
  public filteredList: Array<CourseItem> = [];
  public dialog: MatDialog;
  public dialogRef: MatDialogRef<OnDeleteDialogComponent>;
  public courseSearchPipe: CourseSearchPipe;
  public courseService: CourseService;
  public sub;

  constructor(
    courseService: CourseService,
    dialog: MatDialog,
    courseSearchPipe: CourseSearchPipe
  ) {
    this.courseService = courseService;
    this.courseSearchPipe = courseSearchPipe;
    this.dialog = dialog;
    this.filteredList = [];
  }

  public ngOnInit(): void {
    this.getCourses();
  }
  public ngOnChanges(): void {
    this.filteredList = this.courseSearchPipe.transform(this.coursesList, this.searchValue);
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public onDelete(event: number): void {
    this.dialogRef = this.dialog.open(OnDeleteDialogComponent, {height: '350px', width: '350px'});
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courseService.removeItem(event);
      }
    });
  }

  public getCourses(): void {
    const myObs: {} = {
      next: x => this.coursesList.push(x),
    };
    this.sub = this.courseService.getCourses().subscribe(myObs);
    console.log(this.coursesList);
  }
}
