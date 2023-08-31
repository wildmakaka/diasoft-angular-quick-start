import { ActionTypes } from 'src/app/modules/courses/store/actionTypes';
import * as fromActions from './getCourses.action';

describe('Get Courses actions', () => {
  it('should getCourseAction', () => {
    expect(fromActions.getCoursesAction().type).toBe(ActionTypes.GET_COURSES);
  });

  it('should getCourseSuccessAction', () => {
    expect(fromActions.getCoursesSuccessAction({ courses: [] }).type).toBe(
      ActionTypes.GET_COURSES_SUCCESS
    );
  });
});
