import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/modules/courses/store/actionTypes';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

// export const getCourseAction = createAction(
//   ActionTypes.GET_COURSE
//   props<{ slug: string }>()
// );

export const getCourseAction = createAction(ActionTypes.GET_COURSE);

export const getCourseSuccessAction = createAction(
  ActionTypes.GET_COURSE_SUCCESS,
  props<{ course: CourseInterface }>()
);

export const getCourseFailureAction = createAction(
  ActionTypes.GET_COURSE_FAILURE
);
