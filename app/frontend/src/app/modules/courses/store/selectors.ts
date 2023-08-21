import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesStateInterface } from 'src/app/modules/courses/types/coursesState.interface';
import { RouterStateUrl } from 'src/app/store/router/custom-serializer';
import { getCurrentRoute } from 'src/app/store/router/router.selector';

export const coursesFeatureSelector =
  createFeatureSelector<CoursesStateInterface>('courses');

// export const coursesSelector = createSelector(
//   coursesFeatureSelector,
//   (coursesState: CoursesStateInterface) => coursesState.data
// );

export const coursesSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => {
    console.log('coursesState');
    console.log(coursesState.data);
    return coursesState.data;
  }
);

export const getCoursesByIdSelector = createSelector(
  coursesSelector,
  getCurrentRoute,
  (courses, route: RouterStateUrl) => {
    return courses
      ? courses.find((course) => course.id === route.params['id'])
      : null;
  }
);

export const isLoadingSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.isLoading
);

export const errorSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.error
);
