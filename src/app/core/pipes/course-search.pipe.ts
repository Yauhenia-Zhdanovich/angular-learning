import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../shared/interfaces/course-interface';

@Pipe({name: 'courseSearch'})

export class CourseSearchPipe implements PipeTransform {
  public transform(list: Array<CourseItem>, searchValue: string): Array<CourseItem> {
    if (!list) {
      return;
    }
    console.log(searchValue);
    let filteredList: Array<CourseItem> = list.filter( el => {
      if (el.title.search(new RegExp(searchValue.trim(), 'i')) !== -1) {
        return true;
      }
    });
    return filteredList;
  }
}
