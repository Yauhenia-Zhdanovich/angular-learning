import { AppState } from '../../../app.state';
import * as CourseActions from '../actions/course.actions';
import { CourseItem } from '../../../shared/interfaces';
import { CoursesState } from '../../../shared/interfaces';

export type Action = CourseActions.All;

export const initialState: CoursesState = {
  courses: [],
  loading: false,
  loaded: false
};

export function courseReducer(state: CoursesState = initialState, action: CourseActions.CoursesAction): CoursesState {
  console.log(state, action);
  switch (action.type) {
    case CourseActions.LOAD: {
      return {
        ...state,
        loading: true
      };
    }
    case CourseActions.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
    case CourseActions.LOAD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case CourseActions.GET_COURSE: {
      return {
        ...state,
      };
    }
    case CourseActions.GET_COURSES:
    return {...state, courses: [...action.payload]};
    default:
    return state;
  }
}
