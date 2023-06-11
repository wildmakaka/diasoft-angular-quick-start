import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AddCourseComponent implements OnInit {
  constructor(private readonly coursesService: CoursesService) {}

  // const newCourse: CourseInterface = {
  //   id: 15,
  //   name: 'БС Диасофт React',
  //   creationDate: new Date(2023, 4, 29),
  //   durationMinutes: 64 * 60,
  //   description:
  //     'Курс подготовлен в компании Диасофт для начинающих разработчиков React',
  //   topRated: false,
  // };

  ngOnInit(): void {}

  public courseName: string;
  public courseDescription: string;

  public addCourse(): void {
    const newCourse: CourseInterface = {
      id: Math.floor(Math.random() * 10) + 20,
      name: this.courseName,
      creationDate: new Date(2023, 4, 29),
      durationMinutes: 64 * 60,
      description: this.courseDescription,
      topRated: false,
    };

    this.coursesService.addCourse(newCourse);
  }
}
