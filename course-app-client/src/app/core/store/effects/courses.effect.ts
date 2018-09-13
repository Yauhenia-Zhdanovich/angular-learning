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
    switchMap((action: CoursesActions.CoursesAction) => {
      return this.courseService.getCourses(action.payload).pipe(
        map(courses => new CoursesActions.LoadCoursesSuccess(courses)),
        catchError(error => of(new CoursesActions.LoadCoursesFail(error)))
      );
    })
  );

  @Effect()
  public deleteCourse = this.actions$.ofType(CoursesActions.DELETE).pipe(
    switchMap((action: CoursesActions.CoursesAction) => {
      return this.courseService.removeItem(action.payload).pipe(
        map(() => {
          return new CoursesActions.DeleteCourseSuccess(action.payload);
        }),
        catchError(error => of(new CoursesActions.LoadCoursesFail(error)))
      )
    })
  );

  @Effect()
  public searchCourses = this.actions$.ofType(CoursesActions.SEARCH).pipe(
    switchMap((action: CoursesActions.SearchCourse) => {      
      return this.courseService.serverCourseSearch(action.payload).pipe(
        map(courses => new CoursesActions.SearchCourseSuccess(courses)),
        catchError(error => of(new CoursesActions.SearchCourseFail(error)))
      )
    })
  )
}
