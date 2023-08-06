import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from 'src/app/modules/auth/types/authState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoading
);

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
);

export const errorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.errors
);
