import { Action } from '@ngrx/store';

export enum AUTH_ACTION {
  LOGIN = 'LOGIN',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',
  SIGN_UP = 'SIGN_UP',
  SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE = 'SIGN_UP_FAILURE',
  LOGOUT = 'LOGOUT'
}

export class LogIn implements Action {
  readonly type = AUTH_ACTION.LOGIN;

  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AUTH_ACTION.LOGIN_SUCCESS;

  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AUTH_ACTION.LOGIN_FAILURE;

  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = AUTH_ACTION.SIGN_UP;

  constructor (public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AUTH_ACTION.SIGN_UP_SUCCESS;

  constructor (public payload: any) {}
}

export class SignUpFailure implements Action {
  readonly type = AUTH_ACTION.SIGN_UP_FAILURE;

  constructor (public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AUTH_ACTION.LOGOUT;
}

export type AuthActions =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | LogOut;
