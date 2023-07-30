import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';
import CoursesService from 'src/app/modules/courses/services/courses.service';
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
  editNewCourseForm: FormGroup = new FormGroup({
    courseName: new FormControl('', Validators.required),
    courseDescription: new FormControl('', Validators.required),
    courseDurationInMinutes: new FormControl('', Validators.required),
    courseCreationDate: new FormControl('', Validators.required),
  });
  msgs: Message[];

  courseId: number;

  authors: any[] = [];

  selectedAuthors: any[] = [];

  filteredAuthors: any[];

  constructor(
    private route: ActivatedRoute,
    private readonly coursesService: CoursesService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.coursesService.getCourseAuthors().subscribe({
      next: (data: any) => (this.authors = data),
    });

    this.courseId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.courseId) {
      return;
    }

    this.coursesService.getCourseById(this.courseId).subscribe((course) => {
      const courseAuthors = this.coursesService.transformAuthorsData(
        course.authors
      );

      courseAuthors.map((author) => this.selectedAuthors?.push(author));

      this.editNewCourseForm.patchValue({
        courseName: course.title,
        courseDescription: course.description,
        courseDurationInMinutes: course.duration,
        courseCreationDate: course.creationDate,
      });
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
        !editNewCourseForm.courseCreationDate
      ) {
        this.addErrorMessage();
        return;
      }

      const updatedCourse: CourseInterface = {
        id: this.courseId,
        title: editNewCourseForm.courseName,
        description: editNewCourseForm.courseDescription,
        duration: editNewCourseForm.courseDurationInMinutes,
        creationDate: editNewCourseForm.courseCreationDate,
        topRated: false,
        authors,
      };

      this.coursesService.updateCourse(updatedCourse).subscribe((data) => {
        console.log('course update success');
      });
      this.addSuccessMessage();
    }, 2000);
  }
}
