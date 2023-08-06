import { Action, createReducer, on } from '@ngrx/store';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from 'src/app/modules/auth/store/actions/login.action';
import { logoutAction } from 'src/app/modules/auth/store/actions/logout.action';
import { AuthStateInterface } from 'src/app/modules/auth/types/authState.interface';

const initialState: AuthStateInterface = {
  isLoading: false,
  currentUser: null,
  errors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
      errors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      currentUser: action.currentUser,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      errors: action.errors,
    })
  ),
  on(
    logoutAction,
    (): AuthStateInterface => ({
      ...initialState,
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
