import { Pipe, PipeTransform } from '@angular/core';
import { CourseItem } from '../../shared/interfaces';

@Pipe({name: 'courseSearch'})

export class CourseSearchPipe implements PipeTransform {
  public transform(list: Array<CourseItem>, searchValue: string): Array<CourseItem> {
    if (!list) {
      return;
    }
    let filteredList: Array<CourseItem> = list.filter( element => {
      if (element.title.search(new RegExp(searchValue.trim(), 'i')) !== -1) {
        return true;
      }
    });
    return filteredList;
  }
}
