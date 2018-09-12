import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as CoursesActions from '../actions';
import { CourseService } from '../../services/course.service';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions$: Actions,
    private courseService: CourseService
  ) {}

  @Effect()
  public loadCourses = this.actions$.ofType(CoursesActions.LOAD).pipe(
    switchMap(() => {
      return this.courseService.getCourses(1).pipe(
        map(courses => new CoursesActions.LoadCoursesSuccess(courses)),
        catchError(error => of(new CoursesActions.LoadCoursesFail(error)))
      );
    })
  );
}
