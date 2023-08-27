import { Action, createReducer, on } from '@ngrx/store';
import {
  addCourseAction,
  addCourseFailureAction,
  addCourseSuccessAction,
} from 'src/app/modules/courses/store/actions/addCourse.action';
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
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';
import { CoursesStateInterface } from 'src/app/modules/courses/types/coursesState.interface';

const initialState: CoursesStateInterface = {
  isLoading: false,
  data: null,
  error: null,
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
  on(getCoursesSuccessAction, (state, action): CoursesStateInterface => {
    return {
      ...state,
      isLoading: false,
      data: action.courses,
    };
  }),
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
  on(updateCourseSuccessAction, (state, action): CoursesStateInterface => {
    const updatedData = state.data?.map((course: CourseInterface) => {
      return action.course.id === course.id ? action.course : course;
    });

    return {
      ...state,
      isLoading: false,
      // @ts-ignore
      data: updatedData,
    };
  }),
  on(
    updateCourseFailureAction,
    (state, action): CoursesStateInterface => ({
      ...state,
      isLoading: false,
      error: 'There is an error on update course!',
    })
  ),
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
  on(
    addCourseAction,
    (state): CoursesStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(addCourseSuccessAction, (state, action): CoursesStateInterface => {
    let course = { ...action.course };
    return {
      ...state,
      isLoading: false,
      //@ts-ignore
      data: [...state.data, course],
    };
  }),
  on(
    addCourseFailureAction,
    (state, action): CoursesStateInterface => ({
      ...state,
      isLoading: false,
      error: 'There is an error on add course!',
    })
  )
);

export function reducers(state: CoursesStateInterface, action: Action) {
  return coursesReducer(state, action);
}
