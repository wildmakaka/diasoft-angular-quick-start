import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/modules/courses/store/actionTypes';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export const updateCourseAction = createAction(
  ActionTypes.UPDATE_COURSE,
  props<{ updateCourse: CourseInterface }>()
);

export const updateCourseSuccessAction = createAction(
  ActionTypes.UPDATE_COURSE_SUCCESS,
  props<{ course: CourseInterface }>()
);

export const updateCourseFailureAction = createAction(
  ActionTypes.UPDATE_COURSE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
