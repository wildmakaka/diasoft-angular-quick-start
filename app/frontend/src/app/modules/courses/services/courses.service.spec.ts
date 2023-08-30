import { HttpClient } from '@angular/common/http';
import { cold } from 'jasmine-marbles';
import { API_SERVER } from 'src/app/constants';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SpyOf, autoSpy } from './auto-spy';

describe('CoursesService', () => {
  let service: CoursesService;
  const { build, httpClient } = setup<CoursesService>();

  beforeEach(() => {
    service = build();
  });

  afterEach(() => {
    httpClient.get.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get courses', () => {
    const expected: CourseInterface[] = [
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

    httpClient.get.and.returnValue(cold('-a', { a: expected }));

    expect(service.getCourses()).toBeObservable(cold('-a', { a: expected }));
    expect(httpClient.get).toHaveBeenCalledOnceWith(
      `${API_SERVER}/videocourses?_limit=4`
    );
  });
});

function setup<T>(): {
  default: () => any;
  build: () => T;
  httpClient: SpyOf<HttpClient>;
  [key: string]: any;
} {
  const httpClient: SpyOf<HttpClient> = autoSpy(HttpClient);
  const builder = {
    httpClient,
    default(): any {
      return builder;
    },
    build(): any {
      return new CoursesService({} as LoaderService, httpClient);
    },
  };
  return builder;
}
