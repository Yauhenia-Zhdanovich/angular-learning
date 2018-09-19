import { Action } from '@ngrx/store';
import { CourseItem, CourseData } from '../../../shared/interfaces';

export const LOAD: string = '[Courses] Load';
export const LOAD_FAIL: string = '[Courses] Load Fail';
export const LOAD_SUCCESS: string = '[Courses] Load Success';
export const DELETE: string = '[Courses] Delete';
export const DELETE_FAIL: string = '[Courses] Delete Fail';
export const DELETE_SUCCESS: string = '[Courses] Delete Success';
export const SEARCH: string = '[Courses] Search';
export const SEARCH_SUCCESS: string = '[Courses] Search Success';
export const SEARCH_FAIL: string = '[Courses] Search Fail';

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

export class DeleteCourse implements Action {
  public readonly type: typeof DELETE = DELETE;
  public payload: number;
  constructor(payload: number) {
    this.payload = payload;
  }
}

export class DeleteCourseFail implements Action {
  public readonly type: typeof DELETE_FAIL = DELETE_FAIL;
  public payload: number;
  constructor(payload: number) {
    this.payload = payload;
  }
}
export class DeleteCourseSuccess implements Action {
  public readonly type: typeof DELETE_SUCCESS = DELETE_SUCCESS;
  public payload: number;
  constructor(payload: number) {
    this.payload = payload;
  }
}

export class SearchCourse implements Action {
  public readonly type: typeof SEARCH = SEARCH;
  public payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }
}

export class SearchCourseSuccess implements Action {
  public readonly type: typeof SEARCH_SUCCESS = SEARCH_SUCCESS;
  public payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }
}

export class SearchCourseFail implements Action {
  public readonly type: typeof SEARCH_FAIL = SEARCH_FAIL;
  public payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }
}

export type CoursesAction = LoadCourses
| LoadCoursesFail
| LoadCoursesSuccess
| DeleteCourseSuccess
| DeleteCourse
| DeleteCourseFail
| SearchCourse
| SearchCourseSuccess
| SearchCourseFail;
