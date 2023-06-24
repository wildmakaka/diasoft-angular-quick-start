import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_SERVER } from 'src/app/constants';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Injectable({
  providedIn: 'root',
})
export default class CoursesService {
  private courses: CourseInterface[] = [
    {
      id: 11,
      title: 'БС Диасофт Angular',
      creationDate: new Date(2023, 4, 29),
      duration: 64 * 60,
      description:
        'Курс подготовлен в компании Диасофт для начинающих разработчиков Angular',
      topRated: true,
      authors: [
        {
          id: 1370,
          name: 'Polly',
          lastName: 'Sosa',
        },
      ],
    },
    {
      id: 12,
      title: 'БС Диасофт Аналитик',
      creationDate: new Date(2022, 11, 11),
      duration: 64 * 60 + 30,
      description:
        'Курс подготовлен в компании Диасофт для начинающих Аналитиков',
      topRated: false,
      authors: [
        {
          id: 1370,
          name: 'Polly',
          lastName: 'Sosa',
        },
      ],
    },
    {
      id: 13,
      title: 'БС Диасофт Qpalette',
      creationDate: new Date(2022, 12, 12),
      duration: 55,
      description:
        'Курс подготовлен в компании Диасофт для начинающих разработчиков Qpalette',
      topRated: true,
      authors: [
        {
          id: 1370,
          name: 'Polly',
          lastName: 'Sosa',
        },
      ],
    },
    {
      id: 14,
      title: 'БС Диасофт Java разработчик',
      creationDate: new Date(2022, 9, 11),
      duration: 50 * 60 + 30,
      description:
        'Курс подготовлен в компании Диасофт для начинающих Java разработчиков',
      topRated: false,
      authors: [
        {
          id: 1370,
          name: 'Polly',
          lastName: 'Sosa',
        },
      ],
    },
    {
      id: 15,
      title: 'БС Диасофт QBPM',
      creationDate: new Date(2023, 5, 1),
      duration: 20 * 60,
      description:
        'Курс подготовлен в компании Диасофт для начинающих разбираться в QBPM',
      topRated: false,
      authors: [
        {
          id: 1370,
          name: 'Polly',
          lastName: 'Sosa',
        },
      ],
    },
  ];

  constructor(private readonly httpClient: HttpClient) {}

  public getCourses(): Observable<CourseInterface[]> {
    return this.httpClient.get<CourseInterface[]>(`${API_SERVER}/videocourses`);
  }

  public getCourseById(id: number): Observable<CourseInterface> {
    return this.httpClient.get<CourseInterface>(
      `${API_SERVER}/videocourses/${id}`
    );
  }

  public addCourse(newCourse: CourseInterface): void {
    this.courses.push(newCourse);
  }

  public updateCourse(updatedCourse: CourseInterface): void {
    this.removeCourse(updatedCourse);
    this.addCourse(updatedCourse);
  }

  public removeCourse(deleteCourse: CourseInterface): Observable<{}> {
    console.log(`${API_SERVER}/videocourses/${deleteCourse.id}`);

    return this.httpClient.delete<{}>(
      `${API_SERVER}/videocourses/${deleteCourse.id}`
    );
  }
}
