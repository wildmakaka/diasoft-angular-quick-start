import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  switchMap,
  tap,
} from 'rxjs';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { deleteCourseAction } from 'src/app/modules/courses/store/actions/deleteCourse.action';
import { getCoursesAction } from 'src/app/modules/courses/store/actions/getCourses.action';
import { coursesSelector } from 'src/app/modules/courses/store/selectors';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-courses-list',
  templateUrl: './courses-list.component.html',
  providers: [ConfirmationService],
  styleUrls: ['./courses-list.component.scss'],
})
export default class CoursesListComponent implements OnInit {
  courses$: Observable<CourseInterface[] | null>;
  pageLoaded$: Observable<boolean>;

  private search$: Subject<CourseInterface[]> = new Subject<
    CourseInterface[]
  >();

  constructor(
    private router: Router,
    private store: Store,
    private readonly coursesService: CoursesService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getCoursesAction());
    this.courses$ = this.store.pipe(select(coursesSelector));

    setTimeout(() => {
      this.pageLoaded$ = of(true);
    }, 2000);
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
        .subscribe((jsonData) => {});
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
    this.coursesService.addCourses(4);
    this.dispatchCourse();
  }

  dispatchCourse(): void {
    this.store.dispatch(getCoursesAction());
    this.courses$ = this.store.pipe(select(coursesSelector));
  }

  editCourse(course: CourseInterface): void {
    this.router.navigate([`/courses/${course.id}`]);
  }

  onApproveCourseDeletion(course: CourseInterface): void {
    this.store.dispatch(deleteCourseAction({ course }));
    this.store.dispatch(getCoursesAction());
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
