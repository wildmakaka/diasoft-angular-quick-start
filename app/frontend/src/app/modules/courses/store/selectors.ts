import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesStateInterface } from 'src/app/modules/courses/types/coursesState.interface';

export const coursesFeatureSelector =
  createFeatureSelector<CoursesStateInterface>('article');

export const isLoadingSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.isLoading
);

export const errorSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.error
);

export const coursesSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.data
);
