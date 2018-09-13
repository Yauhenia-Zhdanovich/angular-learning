import { AppState } from '../../../app.state';
import * as CourseActions from '../actions/course.actions';
import { CourseItem } from '../../../shared/interfaces';
import { CoursesState } from '../../../shared/interfaces';

// export type Action = CourseActions.All;

export const initialState: CoursesState = {
  courses: [],
  loading: false,
  loaded: false
};

export function courseReducer(
  state: CoursesState = initialState,
  action: CourseActions.CoursesAction
): CoursesState {
  switch (action.type) {
    case CourseActions.LOAD: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case CourseActions.LOAD_SUCCESS: {
      const courses: CourseItem[] = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        courses
      };
    }
    case CourseActions.LOAD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case CourseActions.DELETE: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case CourseActions.DELETE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case CourseActions.DELETE_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
      };
    }
    case CourseActions.SEARCH: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case CourseActions.SEARCH_SUCCESS: {
      const courses: CourseItem[] = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        courses
      };
    }
    case CourseActions.SEARCH_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    default:
    return state;
  }
}

export const getCoursesLoading = (state: CoursesState) => state.loading;
export const getCoursesLoaded = (state: CoursesState) => state.loaded;
export const getCourses = (state: CoursesState) => state.courses;
