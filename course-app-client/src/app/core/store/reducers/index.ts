import { ActionReducerMap, createSelector,  createFeatureSelector } from '@ngrx/store';

import { CoursesState } from '../../../shared/interfaces';
import * as fromCourses from './course.reducer';

export interface ProductState {
  coursesState: CoursesState;
}
// resgistering the reducers of the appliaction
export const reducers: ActionReducerMap<ProductState> = {
  coursesState: fromCourses.courseReducer,
};

export const getProductState = createFeatureSelector<ProductState>('courses');

export const getCoursesState = createSelector(
  getProductState,
  (state: ProductState) => state.coursesState
);

export const getAllCourses = createSelector(getCoursesState, fromCourses.getCourses);
export const getAllCoursesLoading = createSelector(getCoursesState, fromCourses.getCoursesLoading);
export const getAllCoursesLoaded = createSelector(getCoursesState, fromCourses.getCoursesLoaded);
