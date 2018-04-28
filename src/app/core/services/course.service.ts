import { Injectable } from '@angular/core';

import { COURSELIST } from '../../shared/mocks/mock-courses';
import { CourseItem } from '../../shared/interfaces/course-interface';

@Injectable()

export class CourseService {
  public state: string;

  constructor () {
    this.state = 'authorization';
  }

  public getCourses (): Array<CourseItem> {
    return COURSELIST;
  }

  public removeItem (id: number): void {
    const index: number = COURSELIST.findIndex((element) => {
      return element.id === id;
    });
    COURSELIST.splice(index, 1);
  }

  public createCourse(course: CourseItem ): void {
    COURSELIST.push(course);
  }

  public getItemById(id: number): CourseItem {
    const index: number = COURSELIST.findIndex((element) => {
        return element.id === id;
      }
    ) ;
    return COURSELIST[index];
  }

  public updateItem(course: CourseItem): void {
    COURSELIST.splice(course.id, 1, course);
  }
}
