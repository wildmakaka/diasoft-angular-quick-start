import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/modules/courses/store/actionTypes';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

export const getCoursesAction = createAction(
  ActionTypes.GET_COURSES,
  props<{ slug: string }>()
);

export const getCoursesSuccessAction = createAction(
  ActionTypes.GET_COURSES_SUCCESS,
  props<{ courses: CourseInterface }>()
);

export const getCoursesFailureAction = createAction(
  ActionTypes.GET_COURSES_FAILURE
);
