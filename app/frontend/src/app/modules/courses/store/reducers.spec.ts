import { CourseInterface } from 'src/app/modules/courses/types/course.interface';
import * as fromActions from './actions/getCourses.action';
import { initialState, reducers } from './reducers';

describe('Courses Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducers(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should update state on getCourse', () => {
    const expected = { ...initialState, isLoading: true };
    const action = fromActions.getCoursesAction();

    expect(reducers(initialState, action)).toEqual(expected);
  });

  it('should update state on getCoursesSuccess', () => {
    const courses: CourseInterface[] = [
      {
        id: 8693,
        title: 'БС Диасофт Angular',
        description:
          'Курс подготовлен в компании Диасофт для начинающих разработчиков Angular',
        topRated: true,
        creationDate: new Date('2023-09-05T04:39:24+00:00'),
        duration: 157,
        authors: [
          {
            id: '5b7a846297d0714fe5e92db8',
            name: 'Robert',
            lastName: 'Martin',
          },
          {
            id: '5b7a846290d6ff6894377fb5',
            name: 'Spephen',
            lastName: 'Grider',
          },
          {
            id: '5b7a8462e720a86db64774e7',
            name: 'Andrew',
            lastName: 'Mead',
          },
        ],
      },
    ];
    const prevState = { ...initialState, isLoading: true };
    const expected = { ...initialState, isLoading: false, data: courses };

    expect(
      reducers(prevState, fromActions.getCoursesSuccessAction({ courses }))
    ).toEqual(expected);
  });
});
