import { Injectable } from '@angular/core';

import { COURSELIST } from '../../shared/mocks/mock-courses';
import { CourseItem } from '../../shared/interfaces/course-interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()

export class CourseService {
  private twoWeeks: number = 86400000 * 14;
  public state: string;

  constructor () {
    this.state = 'authorization';
  }

  public getCourses (): any {
    return Observable.from(COURSELIST)
      .map(element => {
        return {
          id: element.id,
          title: element.title,
          creatingDate: element.creatingDate,
          duration: element.duration,
          description: element.description,
          topRated: element.topRated
        };
      })
      .filter(element => {
        const today: number = Date.now();
        const difference: number = today - Date.parse(element.creatingDate.toString());
        return (difference < this.twoWeeks);
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
