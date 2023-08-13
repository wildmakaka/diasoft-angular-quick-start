import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesStateInterface } from 'src/app/modules/courses/types/coursesState.interface';

export const coursesFeatureSelector =
  createFeatureSelector<CoursesStateInterface>('courses');

export const coursesSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.data
);

export const isLoadingSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.isLoading
);

export const errorSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.error
);
