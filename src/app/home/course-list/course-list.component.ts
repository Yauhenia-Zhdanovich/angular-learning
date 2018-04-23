import { Component } from '@angular/core';
import { CourseItem } from './course-interface';
import { CourseService } from '../../core/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
  providers: [CourseService],
})
export class CourseListComponent {
  public coursesList: Array<CourseItem>;
  constructor(private _courseService: CourseService) {
   /* this.coursesList = [
      {
        id: 1,
        title: 'courseName',
        creatingDate: '21.11.2012',
        duration: 20,
        description: 'funny things'
      },
      {
        id: 2,
        title: 'Angular course',
        creatingDate: '11.11.2012',
        duration: 40,
        description: 'studying front-end development'
      },
      {
        id: 3,
        title: 'React course',
        creatingDate: '04.04.2012',
        duration: 30,
        description: 'studying front-end development'
      }
    ];*/
  }
  public onDelete (id: number): void {
    // TODO define type of variable
    const index: number = this.coursesList.findIndex((element) => {
      return element.id === id;
    }) ;
    console.log('index = ', index);
    this.coursesList.splice(index, 1);
  }
  public getCourses(): void {
    this.coursesList = this._courseService.getContacts();
  }

}
