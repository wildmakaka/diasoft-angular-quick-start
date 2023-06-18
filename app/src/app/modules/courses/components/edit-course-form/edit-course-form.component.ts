import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
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

  constructor(
    private readonly coursesService: CoursesService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.editNewCourseForm = new FormGroup({
      courseName: new FormControl('', Validators.required),
      courseDescription: new FormControl('', Validators.required),
      courseDurationInMinutes: new FormControl('10', Validators.required),
      courseCreationDate: new FormControl('', Validators.required),
    });
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

    const newCourse: CourseInterface = {
      id: Math.floor(Math.random() * 10) + 20,
      name: editNewCourseForm.courseName,
      description: editNewCourseForm.courseDescription,
      durationMinutes: editNewCourseForm.courseDurationInMinutes,
      creationDate: editNewCourseForm.courseCreationDate,
      topRated: false,
    };

    this.coursesService.addCourse(newCourse);
    this.addSuccessMessage();
  }
}
