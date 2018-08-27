import {
  Component,
  OnInit,
  Input,
  OnDestroy,
} from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as CourseActions from '../../core/store/actions/course.actions';

import { Subscription, ReplaySubject, pipe, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';

import { Course } from '../../shared/classes/course.class';
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
  // =========================> ngrx 
  private store: Store<AppState>;
  // =========================> ngrx 
  public coursesList: Array<CourseItem> = [];
  // public filteredList: Array<CourseItem> = [];
  public dialog: MatDialog;
  public dialogRef: MatDialogRef<OnDeleteDialogComponent>;
  public courseSearchPipe: CourseSearchPipe;
  public courseService: CourseService;
  public courseSubscriber: Subscription;
  public deleteCourseSubscription: Subscription;
  public dynamicCourseUpload: ReplaySubject<number> = new ReplaySubject();

  // ==========================> ngrx
  public storedCourses: Observable<CourseItem[]>;
  // ==============================> ngrx 
  // @Input('searchValue')
  // public searchValue: string;

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
    this.storedCourses = store.select('courses');
    console.log(this.storedCourses);
    
  }

  private createCourseItem(element: CourseData): CourseItem {
    return new Course(element.id, element.name, element.date, element.length, element.description, element.isTopRated);
  }

  public ngOnInit(): void {
    this.getCourses();
    this.pageCount = 2;
    this.courseService.courseSubject
      .subscribe(data => {
        this.store.dispatch(new CourseActions.GetCourses(data.map(element => this.createCourseItem(element))));
      });
    this.dynamicCourseUpload.pipe(
      switchMap(pageCount => this.courseService.getCourses(pageCount)))
      .subscribe((data) => {
        this.store.dispatch(new CourseActions.GetCourses(data.map(element => this.createCourseItem(element))));
    });
  }

  // public ngOnChanges(): void {
  //   this.filteredList = this.courseSearchPipe.transform(this.coursesList, this.searchValue);
  // }

  public ngOnDestroy(): void {
    if (this.deleteCourseSubscription) {
      this.deleteCourseSubscription.unsubscribe();
    }
    this.dynamicCourseUpload.unsubscribe();
    this.courseSubscriber.unsubscribe();
  }

  public onCourseUploadClick(): void {
    this.dynamicCourseUpload.next(Number(this.pageCount));
    this.pageCount += 1;
  }

  public onDelete(event: number): void {
    this.dialogRef = this.dialog.open(OnDeleteDialogComponent, {height: '10rem', width: '10rem'});
    this.deleteCourseSubscription = this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courseService.removeItem(event)
        .then(() => this.getCourses());
      }
    });
  }

  public getCourses(): void {
    this.courseSubscriber = this.courseService.getCourses(this.pageCount)
      .subscribe(data => {
        const mappedData = data.map(element => {
          return this.createCourseItem(element);
        });
        this.store.dispatch(new CourseActions.GetCourses(mappedData));
      }
    );
  }
}
