import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'dia-edit-course-form',
  templateUrl: './edit-course-form.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export default class EditCourseFormComponent implements OnInit {
  editNewCourseForm: FormGroup;
  msgs: Message[];

  courseId: number;

  constructor(
    private route: ActivatedRoute,
    private readonly coursesService: CoursesService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.courseId) {
      return;
    }

    const updateCourse = this.coursesService.getCourseById(this.courseId);

    // this.editNewCourseForm = new FormGroup({
    //   courseName: new FormControl(updateCourse.title, Validators.required),
    //   courseDescription: new FormControl(
    //     updateCourse.description,
    //     Validators.required
    //   ),
    //   courseDurationInMinutes: new FormControl(
    //     updateCourse.duration,
    //     Validators.required
    //   ),
    //   courseCreationDate: new FormControl(
    //     updateCourse.creationDate,
    //     Validators.required
    //   ),
    // });
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

  onSubmit() {
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
      authors: [
        {
          id: 1370,
          name: 'Polly',
          lastName: 'Sosa',
        },
      ],
    };

    this.coursesService.updateCourse(updatedCourse);
    this.addSuccessMessage();
  }
}
