import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map, tap } from 'rxjs';
import { API_SERVER } from 'src/app/constants';
import { AuthorInterface } from 'src/app/modules/courses/types/author.interfact';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Injectable({
  providedIn: 'root',
})
export default class CoursesService {
  private loadCourse: number = 4;

  constructor(
    private loaderService: LoaderService,
    private readonly httpClient: HttpClient
  ) {}

  public getCourses(): Observable<CourseInterface[]> {
    this.loaderService.showLoader();
    return this.httpClient
      .get<CourseInterface[]>(
        `${API_SERVER}/videocourses?_limit=${this.loadCourse}`
      )
      .pipe(
        delay(1000),
        tap((data) => {
          this.loaderService.hideLoader();
        })
      );
  }

  public searchCourses(searchValue: string): Observable<CourseInterface[]> {
    this.loaderService.showLoader();

    return this.httpClient
      .get<CourseInterface[]>(`${API_SERVER}/videocourses`)
      .pipe(
        delay(1000),
        tap((data) => {
          this.loaderService.hideLoader();
        }),
        map((data: CourseInterface[]) =>
          data.filter(
            (course: CourseInterface) =>
              course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
              course.description
                .toLowerCase()
                .includes(searchValue.toLowerCase())
          )
        )
      );
  }

  public loadMoreCourses(): Observable<CourseInterface[]> {
    this.loadCourse += 4;
    return this.getCourses();
  }

  public getCourseById(id: number): Observable<CourseInterface> {
    return this.httpClient
      .get<CourseInterface>(`${API_SERVER}/videocourses/${id}`)
      .pipe(
        delay(1000),
        tap((data) => {
          this.loaderService.hideLoader();
        })
      );
  }

  public addCourse(newCourse: CourseInterface): Observable<{}> {
    return this.httpClient
      .post<CourseInterface>(`${API_SERVER}/videocourses/`, newCourse)
      .pipe(
        delay(1000),
        tap((data) => {
          this.loaderService.hideLoader();
        })
      );
  }

  public updateCourse(updateCourse: CourseInterface): Observable<{}> {
    return this.httpClient
      .put<CourseInterface>(
        `${API_SERVER}/videocourses/${updateCourse.id}`,
        updateCourse
      )
      .pipe(
        delay(1000),
        tap((data) => {
          this.loaderService.hideLoader();
        })
      );
  }

  public removeCourse(deleteCourse: CourseInterface): Observable<{}> {
    return this.httpClient
      .delete<{}>(`${API_SERVER}/videocourses/${deleteCourse.id}`)
      .pipe(
        delay(1000),
        tap((data) => {
          this.loaderService.hideLoader();
        })
      );
  }

  // Observable<AuthorInterface[]
  public getCourseAuthors(): any {
    console.log('getCourseAuthors');

    this.loaderService.showLoader();
    return this.httpClient.get<AuthorInterface[]>(`${API_SERVER}/authors`).pipe(
      delay(1000),
      tap((data) => {
        this.loaderService.hideLoader();
      }),
      map((response: AuthorInterface[]) => {
        const transformedData = this.transformAuthorsData(response);
        return { ...transformedData };
      })
    );
  }

  transformAuthorsData(data: any[]) {
    const res: any[] = [];
    data.map((author: any) => {
      res.push({ id: author.id, name: author.lastName + ' ' + author.name });
    });
    return res;
  }

  //

  async getData() {
    return [{ name: 'Russian Federation', code: 'RU' }];
  }

  async getCountries() {
    // return Promise.resolve(this.getData());
    return await this.getData();
  }
} //  The end of class;
