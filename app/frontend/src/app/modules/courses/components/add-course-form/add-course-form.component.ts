import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { addCourseAction } from 'src/app/modules/courses/store/actions/addCourse.action';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'dia-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export default class AddCourseFormComponent implements OnInit {
  addNewCourseForm: FormGroup = new FormGroup({
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
  });
  msgs: Message[];

  authors: any[] = [];

  selectedAuthors: any[] = [];

  filteredAuthors: any[];

  constructor(
    private router: Router,
    private store: Store,
    private readonly coursesService: CoursesService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.coursesService.getCourseAuthors().subscribe({
      next: (data: any) => (this.authors = data),
    });
  }

  get courseName() {
    return this.addNewCourseForm.get('courseName') as FormControl;
  }

  get courseDescription() {
    return this.addNewCourseForm.get('courseDescription') as FormControl;
  }

  get courseDurationInMinutes() {
    return this.addNewCourseForm.get('courseDurationInMinutes') as FormControl;
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

  addSuccessMessage() {
    this.msgs = [
      {
        severity: 'success',
        summary: 'Success',
        detail: 'Информация о новом БС успешно добавлена!',
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
      const addNewCourseForm = this.addNewCourseForm.value;

      if (
        !addNewCourseForm.courseName ||
        !addNewCourseForm.courseDescription ||
        !addNewCourseForm.courseDurationInMinutes ||
        !addNewCourseForm.courseCreationDate
      ) {
        this.addErrorMessage();
        return;
      }

      const course: CourseInterface = {
        id: Math.floor(Math.random() * 10) + 20,
        title: addNewCourseForm.courseName,
        description: addNewCourseForm.courseDescription,
        duration: addNewCourseForm.courseDurationInMinutes,
        creationDate: addNewCourseForm.courseCreationDate,
        topRated: false,
        authors,
      };

      this.store.dispatch(addCourseAction({ course }));
      this.addSuccessMessage();
      this.router.navigate(['/courses']);
    }, 2000);
  }
}
