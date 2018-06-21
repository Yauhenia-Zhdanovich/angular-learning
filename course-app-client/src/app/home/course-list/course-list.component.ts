import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy
} from '@angular/core';

import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';

import { Course } from '../../shared/classes/course.class';
import { CourseItem } from '../../shared/interfaces/course.interface';
import { CourseService } from '../../core/services/course.service';
import { OnDeleteDialogComponent } from './on-delete-dialog/on-delete-dialog.component';
import { CourseSearchPipe } from '../../core/pipes/course-search.pipe';
import { Subscription } from 'rxjs';
import { HttpService } from '../../core/services/secureHttp.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [
    CourseSearchPipe,
  ]
})

export class CourseListComponent implements OnInit, OnChanges, OnDestroy {
  public coursesList: Array<CourseItem> = [];
  public filteredList: Array<CourseItem> = [];
  public dialog: MatDialog;
  public dialogRef: MatDialogRef<OnDeleteDialogComponent>;
  public courseSearchPipe: CourseSearchPipe;
  public courseService: CourseService;
  public courseSubscriber: Subscription;

  @Input('searchValue')
  public searchValue: string;

  constructor(
    courseService: CourseService,
    dialog: MatDialog,
    courseSearchPipe: CourseSearchPipe,
    private secure: HttpService
  ) {
    this.courseService = courseService;
    this.courseSearchPipe = courseSearchPipe;
    this.dialog = dialog;
  }

  public ngOnInit(): void {
    this.getCourses();
    this.secure.get('http://localhost:3004/users')
        .map(res => res.json())
        .subscribe(
            data =>  console.log(data) ,
            err => console.log(err),
            () => console.log('Request Complete')
        );
    this.courseService.courseSubject
    .subscribe(data => this.coursesList = data.map(element => {
      return new Course(element.id, element.name, element.date, element.length, element.description, element.isTopRated);
    }));
  }

  public ngOnChanges(): void {
    this.filteredList = this.courseSearchPipe.transform(this.coursesList, this.searchValue);
  }

  public ngOnDestroy(): void {
    this.courseSubscriber.unsubscribe();
  }

  public onDelete(event: number): void {
    this.dialogRef = this.dialog.open(OnDeleteDialogComponent, {height: '350px', width: '350px'});
    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.courseService.removeItem(event)
        .then(() => this.getCourses());
      }
    });
  }

  public getCourses(): void {
    this.courseSubscriber = this.courseService.getCourses()
      .subscribe(data => this.coursesList = data.map(element => {
        return new Course(element.id, element.name, element.date, element.length, element.description, element.isTopRated);
      }));
  }
}
