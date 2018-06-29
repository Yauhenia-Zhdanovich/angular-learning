import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';

import { Course } from '../../shared/classes/course.class';
import { CourseItem } from '../../shared/interfaces/course.interface';
import { CourseData } from '../../shared/interfaces/course-data.interface';
import { CourseService } from '../../core/services/course.service';
import { OnDeleteDialogComponent } from './on-delete-dialog/on-delete-dialog.component';
import { CourseSearchPipe } from '../../core/pipes/course-search.pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [
    CourseSearchPipe,
  ]
})

export class CourseListComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit  {
  private pageCount: number;
  public coursesList: Array<CourseItem> = [];
  public filteredList: Array<CourseItem> = [];
  public dialog: MatDialog;
  public dialogRef: MatDialogRef<OnDeleteDialogComponent>;
  public courseSearchPipe: CourseSearchPipe;
  public courseService: CourseService;
  public courseSubscriber: Subscription;
  public dynamicCourseUpload: Subscription;
  public deleteCourseSubscription: Subscription;

  @Input('searchValue')
  public searchValue: string;

  @ViewChild('uploadButton')
  public uploadButton: ElementRef;

  constructor(
    courseService: CourseService,
    dialog: MatDialog,
    courseSearchPipe: CourseSearchPipe,
  ) {
    this.courseService = courseService;
    this.courseSearchPipe = courseSearchPipe;
    this.dialog = dialog;
  }

  private createCourseItem(element: CourseData): CourseItem {
    return new Course(element.id, element.name, element.date, element.length, element.description, element.isTopRated);
  }

  public ngOnInit(): void {
    this.getCourses();
    this.pageCount = 1;
    this.courseService.courseSubject
    .subscribe(data => this.coursesList = data.map(element => {
      return this.createCourseItem(element);
    }));
  }

  public ngOnChanges(): void {
    this.filteredList = this.courseSearchPipe.transform(this.coursesList, this.searchValue);
  }

  public ngAfterViewInit(): void {
    this.dynamicCourseUpload = 
      Observable.fromEvent(this.uploadButton.nativeElement, 'click')
        .do(() => this.pageCount++)
        .map(() => {
          return this.courseService.getCourses(this.pageCount);
        })
        .switch()
        .subscribe(data => 
          this.coursesList = data.map(element => {
            return this.createCourseItem(element);
          })
        );
  }

  public ngOnDestroy(): void {
    this.courseSubscriber.unsubscribe();
    this.dynamicCourseUpload.unsubscribe();
    this.deleteCourseSubscription.unsubscribe();
  }

  public onDelete(event: number): void {
    this.dialogRef = this.dialog.open(OnDeleteDialogComponent, {height: '350px', width: '350px'});
    this.deleteCourseSubscription = this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courseService.removeItem(event)
        .then(() => this.getCourses());
      }
    });
  }

  public getCourses(): void {
    this.courseSubscriber = this.courseService.getCourses(this.pageCount)
      .subscribe(data => this.coursesList = data.map(element => {
        return this.createCourseItem(element);
      }));
  }
}
