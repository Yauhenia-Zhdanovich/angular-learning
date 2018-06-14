import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../shared/interfaces/course.interface';

@Pipe({name: 'sortByDate'})

export class SortByDatePipe implements PipeTransform {
  public transform(list: Array<CourseItem>, creationDate: Date): Array<CourseItem> {
    list.sort((first, second) => {
      return Date.parse(second.date.toString()) - Date.parse(first.date.toString());
    });
    return list;
  }
}
