import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/modules/courses/store/actionTypes';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export const addCourseAction = createAction(
  ActionTypes.ADD_COURSE,
  props<{ course: CourseInterface }>()
);

export const addCourseSuccessAction = createAction(
  ActionTypes.ADD_COURSE_SUCCESS,
  props<{ course: CourseInterface }>()
);

export const addCourseFailureAction = createAction(
  ActionTypes.ADD_COURSE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
