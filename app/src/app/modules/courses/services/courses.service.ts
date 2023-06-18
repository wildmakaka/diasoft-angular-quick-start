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
      durationInMinutes: 64 * 60,
      description:
        'Курс подготовлен в компании Диасофт для начинающих разработчиков Angular',
      topRated: true,
    },
    {
      id: 12,
      name: 'БС Диасофт Аналитик',
      creationDate: new Date(2022, 11, 11),
      durationInMinutes: 64 * 60 + 30,
      description:
        'Курс подготовлен в компании Диасофт для начинающих Аналитиков',
      topRated: false,
    },
    {
      id: 13,
      name: 'БС Диасофт Qpalette',
      creationDate: new Date(2022, 12, 12),
      durationInMinutes: 55,
      description:
        'Курс подготовлен в компании Диасофт для начинающих разработчиков Qpalette',
      topRated: true,
    },
    {
      id: 14,
      name: 'БС Диасофт Java разработчик',
      creationDate: new Date(2022, 9, 11),
      durationInMinutes: 50 * 60 + 30,
      description:
        'Курс подготовлен в компании Диасофт для начинающих Java разработчиков',
      topRated: false,
    },
    {
      id: 15,
      name: 'БС Диасофт QBPM',
      creationDate: new Date(2023, 5, 1),
      durationInMinutes: 20 * 60,
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
    const course = this.courses.filter(function (data) {
      return data.id === id;
    });
    return course[0];
  }

  public addCourse(newCourse: CourseInterface): void {
    this.courses.push(newCourse);
  }

  public updateCourse(updatedCourse: CourseInterface): void {
    this.removeCourse(updatedCourse);
    this.addCourse(updatedCourse);
  }

  public removeCourse(deleteCourse: CourseInterface): void {
    this.courses = this.courses.filter(
      (course) => course.id !== deleteCourse.id
    );
  }
}
