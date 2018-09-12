import { Action } from '@ngrx/store';
import { CourseItem, CourseData } from '../../../shared/interfaces';

export const LOAD: string = '[Courses] Load';
export const LOAD_FAIL: string = '[Courses] Load Fail';
export const LOAD_SUCCESS: string = '[Courses] Load Success';

// payload was added by me, it doesn't exist in a tutorial code
export class LoadCourses implements Action {
  public readonly type: typeof LOAD = LOAD;
  public payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
}

export class LoadCoursesFail implements Action {
  public readonly type: typeof LOAD_FAIL = LOAD_FAIL;
  public payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
}

export class LoadCoursesSuccess implements Action {
  public readonly type: typeof LOAD_SUCCESS = LOAD_SUCCESS;
  public payload: CourseData[];
  constructor(payload: CourseData[]) {
    this.payload = payload;
  }
}

export type CoursesAction = LoadCourses | LoadCoursesFail | LoadCoursesSuccess;
