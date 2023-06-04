import { Injectable } from '@angular/core';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Injectable({
  providedIn: 'root',
})
export default class CoursesService {
  private courses: CourseInterface[] = [
    {
      id: 11,
      name: 'БС Диасофт Angular',
      creationDate: new Date(2023, 4, 29),
      durationMinutes: 64 * 60,
      description:
        'Курс подготовлен в компании Диасофт для начинающих разработчиков Angular',
      topRated: true,
    },
    {
      id: 12,
      name: 'БС Диасофт Аналитик',
      creationDate: new Date(2022, 11, 11),
      durationMinutes: 64 * 60 + 30,
      description:
        'Курс подготовлен в компании Диасофт для начинающих Аналитиков',
      topRated: false,
    },
    {
      id: 13,
      name: 'БС Диасофт Qpalette',
      creationDate: new Date(2022, 12, 12),
      durationMinutes: 55,
      description:
        'Курс подготовлен в компании Диасофт для начинающих разработчиков Qpalette',
      topRated: true,
    },
    {
      id: 14,
      name: 'БС Диасофт Java разработчик',
      creationDate: new Date(2022, 9, 11),
      durationMinutes: 50 * 60 + 30,
      description:
        'Курс подготовлен в компании Диасофт для начинающих Java разработчиков',
      topRated: false,
    },
    {
      id: 15,
      name: 'БС Диасофт QBPM',
      creationDate: new Date(2023, 5, 1),
      durationMinutes: 20 * 60,
      description:
        'Курс подготовлен в компании Диасофт для начинающих разбираться в QBPM',
      topRated: false,
    },
  ];

  constructor() {}

  public getCourses(): CourseInterface[] {
    return this.courses;
  }

  public getCourseById(id: number): CourseInterface {
    return this.getCourses()[0];
  }

  public createCourse(course: CourseInterface): void {
    // TODO: Later
  }

  public updateCourse(course: CourseInterface): void {
    // TODO: Later
  }

  public removeCourse(course: CourseInterface): void {
    this.courses = this.courses.filter((course1) => course1.id !== course.id);
  }
}
