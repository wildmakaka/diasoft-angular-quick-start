import { CourseInterface } from 'src/app/modules/courses/types/course.interface';
import { CoursesStateInterface } from 'src/app/modules/courses/types/coursesState.interface';
import * as fromSelectors from './selectors';

describe('CoursesSelectors', () => {
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
    {
      id: 4980,
      title: 'БС Диасофт Аналитик',
      creationDate: new Date('2023-08-27T02:02:36.000Z'),
      description:
        'Курс подготовлен в компании Диасофт для начинающих Аналитиков',
      topRated: false,
      duration: 207,
      authors: [
        {
          id: '5b7a846297d0714fe5e92db8',
          name: 'Robert',
          lastName: 'Martin',
        },
        {
          id: '5b7a84624010db4d640e0099',
          name: 'Brad',
          lastName: 'Traversy',
        },
        {
          id: '5b7a8462e720a86db64774e7',
          name: 'Andrew',
          lastName: 'Mead',
        },
      ],
    },
    {
      id: 4282,
      title: 'БС Диасофт Qpalette',
      description:
        'Курс подготовлен в компании Диасофт для начинающих разработчиков Qpalette',
      topRated: true,
      creationDate: new Date('2022-03-25T12:57:37+00:00'),
      duration: 197,
      authors: [
        {
          id: '5b7a846290d6ff6894377fb5',
          name: 'Spephen',
          lastName: 'Grider',
        },
        {
          id: '5b7a84624010db4d640e0099',
          name: 'Brad',
          lastName: 'Traversy',
        },
      ],
    },
    {
      id: 1936,
      title: 'БС Диасофт Java разработчик',
      creationDate: new Date('2013-03-18T06:36:07.000Z'),
      description:
        'Курс подготовлен в компании Диасофт для начинающих Java разработчиков',
      topRated: true,
      duration: 232,
      authors: [
        {
          id: '5b7a846290d6ff6894377fb5',
          name: 'Spephen',
          lastName: 'Grider',
        },
        {
          id: '5b7a8462db677f5f1fedd275',
          name: 'Nana',
          lastName: 'Janashia',
        },
        {
          id: '5b7a8462e720a86db64774e7',
          name: 'Andrew',
          lastName: 'Mead',
        },
      ],
    },
  ];

  const state: CoursesStateInterface = {
    isLoading: false,
    error: '',
    data: courses,
  };

  it('should select courses from store', () => {
    expect(fromSelectors.coursesSelector.projector(state)).toEqual(state.data);
  });
});
