import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/modules/courses/store/actionTypes';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

export const deleteCourseAction = createAction(
  ActionTypes.DELETE_COURSE,
  props<{ course: CourseInterface }>()
);

export const deleteCourseSuccessAction = createAction(
  ActionTypes.DELETE_COURSE_SUCCESS
);

export const deleteCourseFailureAction = createAction(
  ActionTypes.DELETE_COURSE_FAILURE
);
