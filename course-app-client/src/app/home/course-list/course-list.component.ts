import {
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as fromStore from '../../core/store';

import { Subscription, ReplaySubject, Observable } from 'rxjs';

import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';

import { CourseItem, CourseData } from '../../shared/interfaces';
import { CourseService } from '../../core/services/course.service';
import { OnDeleteDialogComponent } from './on-delete-dialog/on-delete-dialog.component';
import { CourseSearchPipe } from '../../core/pipes/course-search.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [
    CourseSearchPipe,
  ]
})
export class CourseListComponent implements OnInit, OnDestroy {
  private pageCount: number;
  private store: Store<AppState>;

  public coursesList$: Observable<CourseItem[]>;
  public dialog: MatDialog;
  public dialogRef: MatDialogRef<OnDeleteDialogComponent>;
  public courseSearchPipe: CourseSearchPipe;
  public courseService: CourseService;
  public courseSubscriber: Subscription;
  public deleteCourseSubscription: Subscription;
  public dynamicCourseUpload: ReplaySubject<number> = new ReplaySubject();
  public searchValue: string = '';
  public storedCourses: Observable<CourseItem[]>;

  constructor(
    courseService: CourseService,
    dialog: MatDialog,
    courseSearchPipe: CourseSearchPipe,
    store: Store<AppState>
  ) {
    this.courseService = courseService;
    this.courseSearchPipe = courseSearchPipe;
    this.dialog = dialog;
    this.store = store;
  }

  public ngOnInit(): void {
    this.coursesList$ = this.store.select(fromStore.getAllCourses);
    this.courseService.courseSubject.subscribe(query => {
      this.searchValue = query;
      this.store.dispatch(new fromStore.SearchCourse(query));
    });
    this.store.dispatch(new fromStore.LoadCourses(true));
    this.pageCount = 2;
  }

  public ngOnDestroy(): void {
    if (this.deleteCourseSubscription) {
      this.deleteCourseSubscription.unsubscribe();
    }
  }

  public onCourseUploadClick(): void {
    this.store.dispatch(new fromStore.LoadCourses(Number(this.pageCount)));
    this.pageCount += 1;
  }

  public onDelete(event: number): void {
    this.dialogRef = this.dialog.open(OnDeleteDialogComponent, {height: '10rem', width: '10rem'});
    this.deleteCourseSubscription = this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new fromStore.DeleteCourse(event));
      }
    });
  }
}
