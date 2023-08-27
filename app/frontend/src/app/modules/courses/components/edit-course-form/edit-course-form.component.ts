import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { updateCourseAction } from 'src/app/modules/courses/store/actions/updateCourse.action';
import { getCoursesByIdSelector } from 'src/app/modules/courses/store/selectors';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'dia-edit-course-form',
  templateUrl: './edit-course-form.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export default class EditCourseFormComponent implements OnInit, OnDestroy {
  course$: Observable<CourseInterface | null | undefined>;

  editNewCourseForm: FormGroup = new FormGroup({
    courseName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
    courseDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(500),
    ]),
    courseDurationInMinutes: new FormControl('10', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    courseCreationDate: new FormControl('', Validators.required),
    selectedAuthors: new FormControl('', Validators.required),
  });
  msgs: Message[];

  courseId: number;

  authors: any[] = [];

  selectedAuthors: any[] = [];

  filteredAuthors: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private readonly coursesService: CoursesService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.course$ = this.store.select(getCoursesByIdSelector);

    this.course$.subscribe((course) => {
      this.editNewCourseForm.patchValue({
        courseName: course?.title,
        courseDescription: course?.description,
        courseDurationInMinutes: course?.duration,
        // @ts-ignore
        courseCreationDate: new Date(course?.creationDate),
        selectedAuthors: this.selectedAuthors,
      });

      const courseAuthors = this.coursesService.transformAuthorsData(
        //@ts-ignore
        course?.authors
      );
      courseAuthors.map((author) => this.selectedAuthors?.push(author));
    });

    // ---------------------------

    // Получить список всех возможных авторов
    this.coursesService.getCourseAuthors().subscribe({
      next: (data: any) => (this.authors = data),
    });
  }

  ngOnDestroy(): void {}

  get courseName() {
    return this.editNewCourseForm.get('courseName') as FormControl;
  }

  get courseDescription() {
    return this.editNewCourseForm.get('courseDescription') as FormControl;
  }

  get courseDurationInMinutes() {
    return this.editNewCourseForm.get('courseDurationInMinutes') as FormControl;
  }

  addSuccessMessage() {
    this.msgs = [
      {
        severity: 'success',
        summary: 'Success',
        detail: 'Информация о новом БС успешно обновлена!',
      },
    ];
  }

  addErrorMessage() {
    this.msgs = [
      {
        severity: 'error',
        summary: 'Error',
        detail: 'Вы не заполнили все необходимые поля данными!',
      },
    ];
  }

  filterAuthors(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    this.authors.map((country) => {
      if (country.name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(country);
      }
    });
    this.filteredAuthors = filtered;
  }

  onSubmit() {
    const authors: any = [];

    this.selectedAuthors.map((author) => {
      this.coursesService
        .getCourseAuthorById(author.id)
        .subscribe((authorInfo) => {
          authors.push({
            // @ts-ignore
            id: authorInfo.id,

            // @ts-ignore
            name: authorInfo.name,

            // @ts-ignore
            lastName: authorInfo.lastName,
          });
        });
    });

    setTimeout(() => {
      const editNewCourseForm = this.editNewCourseForm.value;

      if (
        !editNewCourseForm.courseName ||
        !editNewCourseForm.courseDescription ||
        !editNewCourseForm.courseDurationInMinutes ||
        !editNewCourseForm.courseCreationDate ||
        !this.selectedAuthors
      ) {
        this.addErrorMessage();
        return;
      }

      const updateCourse: CourseInterface = {
        id: this.courseId,
        title: editNewCourseForm.courseName,
        description: editNewCourseForm.courseDescription,
        duration: editNewCourseForm.courseDurationInMinutes,
        creationDate: editNewCourseForm.courseCreationDate,
        topRated: false,
        authors,
      };

      this.store.dispatch(updateCourseAction({ updateCourse }));
      this.addSuccessMessage();
      this.router.navigate(['/courses']);
    }, 2000);
  }
}
