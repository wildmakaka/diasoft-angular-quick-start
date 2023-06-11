import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export default class AddCourseComponent implements OnInit {
  public courseName: string;
  public courseDescription: string;
  public courseDurationMinutes: number;
  public creationDate: Date;
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

  public addCourse(): void {
    if (
      !this.courseName ||
      !this.courseDescription ||
      !this.creationDate ||
      !this.courseDurationMinutes
    ) {
      this.addErrorMessage();
      return;
    }

    const newCourse: CourseInterface = {
      id: Math.floor(Math.random() * 10) + 20,
      name: this.courseName,
      creationDate: this.creationDate,
      durationMinutes: this.courseDurationMinutes,
      description: this.courseDescription,
      topRated: false,
    };

    this.coursesService.addCourse(newCourse);
    this.addSuccessMessage();
  }
}
