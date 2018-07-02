import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { Observable } from 'rxjs';

import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { AUTH_ACTION, LogIn, LogInFailure, LogInSuccess, SignUp, SignUpSuccess, SignUpFailure, LogOut } from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  @Effect()
  LogIn: Observable<any> = this.actions
    .ofType(AUTH_ACTION.LOGIN)
    .pipe(map((action: LogIn) => action.payload))
    .pipe(switchMap(payload => {
      return this.authService.logIn(payload.email, payload.password)
        .pipe(map((user) => {
          console.log(user);
          return new LogInSuccess({token: user.token, email: payload.email});
        }))
        .pipe(catchError((error) => {
          console.log(error);
          return of(new LogInFailure({ error: error }));
        }));
    }));

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AUTH_ACTION.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AUTH_ACTION.LOGIN_FAILURE)
  );

  @Effect()
  SignUp: Observable<any> = this.actions
    .ofType(AUTH_ACTION.SIGN_UP)
    .pipe(map((action: SignUp) => action.payload))
    .pipe(switchMap(payload => {
      return this.authService.signUp(payload.email, payload.password)
        .pipe(map((user) => {
          console.log(user);
          return new SignUpSuccess({token: user.token, email: payload.email});
        }))
        .pipe(catchError((error) => {
          console.log(error);
          return of(new SignUpFailure({ error: error }));
        }));
    }));

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AUTH_ACTION.SIGN_UP_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AUTH_ACTION.SIGN_UP_FAILURE)
  );

  @Effect({ dispatch: false })
  public LogOut: Observable<any> = this.actions.pipe(
    ofType(AUTH_ACTION.LOGOUT),
    tap((user) => {
      localStorage.removeItem('token');
    })
  );

}
