import { routerNavigatedAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import {
  getCourseAction,
  getCourseFailureAction,
  getCourseSuccessAction,
} from 'src/app/modules/courses/store/actions/getCourse.action';
import {
  getCoursesAction,
  getCoursesFailureAction,
  getCoursesSuccessAction,
} from 'src/app/modules/courses/store/actions/getCourses.action';
import {
  updateCourseAction,
  updateCourseFailureAction,
  updateCourseSuccessAction,
} from 'src/app/modules/courses/store/actions/updateCourse.action';
import { CoursesStateInterface } from 'src/app/modules/courses/types/coursesState.interface';

const initialState: CoursesStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const coursesReducer = createReducer(
  initialState,
  on(
    getCoursesAction,
    (state): CoursesStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCoursesSuccessAction,
    (state, action): CoursesStateInterface => ({
      ...state,
      isLoading: false,
      data: action.courses,
    })
  ),
  on(
    getCoursesFailureAction,
    (state): CoursesStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    updateCourseAction,
    (state): CoursesStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    updateCourseSuccessAction,
    (state): CoursesStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  // on(
  //   updateCourseFailureAction,
  //   (state, action): CoursesStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //     error: action.errors,
  //   })
  // ),
  on(
    updateCourseFailureAction,
    (state, action): CoursesStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    getCourseAction,
    (state): CoursesStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  // on(
  //   getCourseSuccessAction,
  //   (state, action): CoursesStateInterface => ({
  //     ...state,
  //     isLoading: false,
  //     data: action.course,
  //   })
  // ),
  on(
    getCourseSuccessAction,
    (state, action): CoursesStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    getCourseFailureAction,
    (state): CoursesStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigatedAction, (): CoursesStateInterface => initialState)
);

export function reducers(state: CoursesStateInterface, action: Action) {
  return coursesReducer(state, action);
}
