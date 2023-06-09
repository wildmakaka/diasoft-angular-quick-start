import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'dia-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export default class AddCourseFormComponent implements OnInit {
  addNewCourseForm: FormGroup = new FormGroup({
    courseName: new FormControl('', Validators.required),
    courseDescription: new FormControl('', Validators.required),
    courseDurationInMinutes: new FormControl('10', Validators.required),
    courseCreationDate: new FormControl('', Validators.required),
    courseAuthors: new FormControl('', Validators.required),
  });
  msgs: Message[];

  constructor(
    private readonly coursesService: CoursesService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {}

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

    const newCourse: CourseInterface = {
      id: Math.floor(Math.random() * 10) + 20,
      title: addNewCourseForm.courseName,
      description: addNewCourseForm.courseDescription,
      duration: addNewCourseForm.courseDurationInMinutes,
      creationDate: addNewCourseForm.courseCreationDate,
      topRated: false,
      authors: [
        {
          id: 1370,
          name: 'Polly',
          lastName: 'Sosa',
        },
      ],
    };

    this.coursesService.addCourse(newCourse).subscribe((data) => {
      console.log('success addCourse');
    });
    this.addSuccessMessage();
  }
}
