import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../shared/interfaces/course-interface';

@Pipe({name: 'courseSearch'})

export class CourseSearchPipe implements PipeTransform {
  public transform(list: Array<CourseItem>): Array<CourseItem> {
    return list;
  }
}
