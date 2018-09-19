import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as AuthActions from '../actions/auth.actions';

import { AuthService } from '../../services/authenticity.service';
import { User } from '../../../shared/interfaces';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  @Effect()
  public loadCred = this.actions$.ofType(AuthActions.LOAD_USER).pipe(
    switchMap((action: AuthActions.LoadAuthor) => {
      return this.authService.logIn(action.payload).pipe(
        map((data: User[]) => {
          this.authService.storeAndNavigate(data);
          return new AuthActions.LoadAuthorSuccess(true);
        }),
        catchError(error => of(new AuthActions.LoadAuthorFail(error)))
      );
    }),
  )
}
