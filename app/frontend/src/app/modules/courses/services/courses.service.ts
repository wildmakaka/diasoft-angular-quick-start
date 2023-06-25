import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_SERVER } from 'src/app/constants';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Injectable({
  providedIn: 'root',
})
export default class CoursesService {
  loadCourse: number = 4;

  constructor(private readonly httpClient: HttpClient) {}

  public getCourses(): Observable<CourseInterface[]> {
    return this.httpClient.get<CourseInterface[]>(
      `${API_SERVER}/videocourses?_limit=${this.loadCourse}`
    );
  }

  public loadMoreCourses(): Observable<CourseInterface[]> {
    this.loadCourse += 4;
    return this.getCourses();
  }

  public getCourseById(id: number): Observable<CourseInterface> {
    return this.httpClient.get<CourseInterface>(
      `${API_SERVER}/videocourses/${id}`
    );
  }

  public addCourse(newCourse: CourseInterface): Observable<{}> {
    return this.httpClient.post<CourseInterface>(
      `${API_SERVER}/videocourses/`,
      newCourse
    );
  }

  public updateCourse(updateCourse: CourseInterface): Observable<{}> {
    return this.httpClient.put<CourseInterface>(
      `${API_SERVER}/videocourses/${updateCourse.id}`,
      updateCourse
    );
  }

  public removeCourse(deleteCourse: CourseInterface): Observable<{}> {
    return this.httpClient.delete<{}>(
      `${API_SERVER}/videocourses/${deleteCourse.id}`
    );
  }
}
