import { Injectable } from '@angular/core';
import { COURSELIST } from '../../assets/mock-courses';
import { CourseItem } from '../../home/course-list/course-interface';

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
    }
    ) ;
    COURSELIST.splice(index, 1);
  }
  // TODO add type definition
  public createCourse(
    {
      id,
      title,
      creatingDate,
      duration,
      description
    }
  ): void {
    const newItem: CourseItem = {
      id,
      title,
      creatingDate,
      duration,
      description
    };
    COURSELIST.push(newItem);
  }

  public getItemById(id: number): CourseItem {
    const index: number = COURSELIST.findIndex((element) => {
        return element.id === id;
      }
    ) ;
    return COURSELIST[index];
  }

  public updateItem(
    id: number,
    title: string,
    creatingDate: string,
    duration: number,
    description: string
  ): void {
    const newItem: CourseItem = {id, title, creatingDate, duration, description};
    COURSELIST.splice(id, 1, newItem);
  }
}
