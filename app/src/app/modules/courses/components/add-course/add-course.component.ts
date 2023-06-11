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

  ngOnInit(): void {}

  public courseName: string;
  public courseDescription: string;
  public courseDurationMinutes: number;
  public creationDate: Date;

  public addCourse(): void {
    const newCourse: CourseInterface = {
      id: Math.floor(Math.random() * 10) + 20,
      name: this.courseName,
      creationDate: this.creationDate,
      durationMinutes: this.courseDurationMinutes,
      description: this.courseDescription,
      topRated: false,
    };

    this.coursesService.addCourse(newCourse);
  }
}
