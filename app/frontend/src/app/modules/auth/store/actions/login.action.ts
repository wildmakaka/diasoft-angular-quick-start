import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/modules/auth/store/actionTypes';
import { CurrentUserInterface } from 'src/app/modules/auth/types/currentUser.interface';
import { LoginRequestInterface } from 'src/app/modules/auth/types/loginRequest.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
