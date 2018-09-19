import * as fromAuth from '../actions/auth.actions';
import { User } from '../../../shared/interfaces';

export interface AuthState {
  user: any;
  loaded: boolean;
  loading: boolean;
}

export const initialState: AuthState = {
  user: {},
  loaded: false,
  loading: false,
};

export function reducer(state: AuthState = initialState, action: fromAuth.AuthActions): AuthState {
  switch (action.type) {
    case fromAuth.LOAD_USER: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case fromAuth.LOAD_USER_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromAuth.LOAD_USER_SUCCESS: {
      const user: User = action.payload;
      return {
        ...state,
        loaded: true,
        loading: false,
        user
      };
    }
    default: return state;
  }
}

export const getUser = (state:  AuthState) => state.user;
export const getLoading = (state: AuthState) => state.loading;
export const getLoaded = (state: AuthState) => state.loaded;
