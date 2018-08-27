import { Action } from '@ngrx/store';
import { CourseItem } from '../../../shared/interfaces';

export const GET_COURSE: string = 'Course get';
export const GET_COURSES: string = 'Course fetch';
export const FILTER_COURSES: string = 'Course filter';
export const UPDATE_COURSE: string = 'Course update';
export const DELETE_COURSE: string = 'Course delete';

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
  public payload: CourseItem[];
  constructor(payload: CourseItem[]) {
    this.payload = payload;
  }
}

export type CoursesAction = LoadCourses | LoadCoursesFail | LoadCoursesSuccess;

// =================================================> 

export class GetCourse implements Action {
  public readonly type: string = GET_COURSE;
  public payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }
}

export class GetCourses implements Action {
  public readonly type: string = GET_COURSES;
  public payload: CourseItem[];

  constructor(payload: CourseItem[]) {
    this.payload = payload;
  }
}

export class FilterCourses implements Action {
  public readonly type: string = FILTER_COURSES;
  public payload: string;

  // constructor()
}

export type All = GetCourses;
