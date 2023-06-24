import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_SERVER } from 'src/app/constants';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Injectable({
  providedIn: 'root',
})
export default class CoursesService {
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
    // this.courses.push(newCourse);
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
