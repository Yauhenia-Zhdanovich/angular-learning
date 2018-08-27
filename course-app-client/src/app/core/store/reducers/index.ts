import { ActionReducerMap } from '@ngrx/store';

import { CoursesState } from '../../../shared/interfaces';
import { courseReducer } from './course.reducer';

export interface AppState {
  coursesState: CoursesState;
}
// resgistering the reducers of the appliaction
export const reducers: ActionReducerMap<AppState> = {
  coursesState: courseReducer,
};
