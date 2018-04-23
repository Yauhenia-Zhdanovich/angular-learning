import { Component, OnInit } from '@angular/core';
import { CourseItem } from './course-interface';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [CourseService],
})
export class CourseListComponent implements OnInit {
  public coursesList: Array<CourseItem>;
  constructor(private _courseService: CourseService) {
  }
  ngOnInit(): void {
    this.getCourses();
  }
  public onDelete (id: number): void {
    const verify: boolean = confirm('Do you want to delete this course?');
    if (!verify) {
      return;
    }
    this._courseService.removeItem(id);
  }
  public getCourses(): void {
    this.coursesList = this._courseService.getCourses();
  }

}
