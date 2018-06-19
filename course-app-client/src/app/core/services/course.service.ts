import { Injectable } from '@angular/core';

import { COURSELIST } from '../../shared/mocks/mock-courses';
import { CourseItem } from '../../shared/interfaces/course-interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';

@Injectable()

export class CourseService {
  private twoWeeks: number = 86400000 * 14;
  public state: string;

  constructor () {
    this.state = 'authorization';
  }

  public getCourses (): any {
    return Observable.from(COURSELIST)
      .filter(element => {
        const today: number = Date.now();
        const difference: number = today - Date.parse(element.creatingDate.toString());
        if (difference < this.twoWeeks) {
          return element;
        }
      });

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
