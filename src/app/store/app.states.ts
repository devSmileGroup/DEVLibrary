import * as auth from './reducers/auth.reducers';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
  authState: auth.State;
}

export const reducers = {
  auth: auth.reducer
};

export const AuthState = createFeatureSelector<AppState>('auth');
