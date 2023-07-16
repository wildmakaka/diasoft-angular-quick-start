import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  merge,
  of,
  switchMap,
  tap,
} from 'rxjs';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-courses-list',
  templateUrl: './courses-list.component.html',
  providers: [ConfirmationService],
  styleUrls: ['./courses-list.component.scss'],
})
export default class CoursesListComponent implements OnInit {
  private search$: Subject<CourseInterface[]> = new Subject<
    CourseInterface[]
  >();

  public courses$: Observable<CourseInterface[]> = merge(
    this.coursesService.getCourses(),
    this.search$
  );

  constructor(
    private router: Router,
    private readonly coursesService: CoursesService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    //this.loaderService.showLoader();
  }

  onSearchTextEntered(searchValue: string): void {
    if (searchValue.length < 3) {
      of(searchValue)
        .pipe(
          debounceTime(250),
          distinctUntilChanged(),
          switchMap((value) =>
            this.coursesService
              .getCourses()
              .pipe(tap((courses) => this.search$.next(courses)))
          )
        )
        .subscribe((jsonData) => {
          //this.isLoading$ = of(false);
        });
    } else {
      this.courses$ = this.search$;
      of(searchValue)
        .pipe(
          debounceTime(250),
          filter((value) => !!value && value.length >= 3),
          distinctUntilChanged(),
          switchMap((value) =>
            this.coursesService
              .searchCourses(value)
              .pipe(tap((courses) => this.search$.next(courses)))
          )
        )
        .subscribe((jsonData) => {});
    }
  }

  loadMoreCourses(): void {
    this.courses$ = this.coursesService.loadMoreCourses();
  }

  editCourse(course: CourseInterface): void {
    this.router.navigate([`/courses/${course.id}`]);
  }

  onApproveCourseDeletion(course: CourseInterface): void {
    this.coursesService.removeCourse(course).subscribe((data) => {
      console.log('success removeCourse');
    });
  }

  showConfirmDeletionDialog(course: CourseInterface) {
    this.confirmationService.confirm({
      header: `Подтверждаете удаление курса ` + course.title + ' ?',
      message:
        'Нажмите на кнопку "Да", для подтверждения удаления, либо "Нет" для отмены операции.',
      icon: 'pi pi-exclamation-triangle',
      reject: () => this.confirmationService.close(),
      rejectLabel: 'Нет',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => this.onApproveCourseDeletion(course),
      acceptLabel: 'Да',
      acceptButtonStyleClass: 'p-button-danger',
    });
  }
}
