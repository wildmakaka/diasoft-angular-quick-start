import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseInterface } from 'src/app/types/course.interface copy';

@Component({
  selector: 'app-dia-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export default class CourseComponent {
  @Input() public course: CourseInterface = {} as CourseInterface;
  @Output() public edit: EventEmitter<CourseInterface> =
    new EventEmitter<CourseInterface>();
  @Output() public delete: EventEmitter<CourseInterface> =
    new EventEmitter<CourseInterface>();

  public editCourse(): void {
    this.edit.emit(this.course);
  }

  public deleteCourse(): void {
    this.delete.emit(this.course);
  }
}
