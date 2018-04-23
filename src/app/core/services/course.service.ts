import { Injectable } from '@angular/core';
import { COURSELIST } from '../../assets/mock-courses';
import { CourseItem } from '../../home/course-list/course-interface';

@Injectable()

export class CourseService {
  public getContacts (): Array<CourseItem> {
    return COURSELIST;
  }
}
