import { Action } from '@ngrx/store';

export const LOAD_USER: string = '[Auth] Load';
export const LOAD_USER_FAIL: string = '[Auth] Load Fail';
export const LOAD_USER_SUCCESS: string = '[Auth] Load Success';

export class LoadAuthor implements Action {
  public readonly type: typeof LOAD_USER = LOAD_USER;
  public payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
}

export class LoadAuthorFail implements Action {
  public readonly type: typeof LOAD_USER_FAIL = LOAD_USER_FAIL;
  public payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
}

export class LoadAuthorSuccess implements Action {
  public readonly type: typeof LOAD_USER_SUCCESS = LOAD_USER_SUCCESS;
  public payload: any;
  constructor(payload: any) {
    this.payload = payload;
  }
}

export type
