import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-course',
  templateUrl: './course.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CourseComponent {
  @Input() public course: CourseInterface = {} as CourseInterface;

  // @Output() public edit: EventEmitter<CourseInterface> =
  //   new EventEmitter<CourseInterface>();

  // @Output() public delete: EventEmitter<CourseInterface> =
  //   new EventEmitter<CourseInterface>();

  // public editCourse(): void {
  //   this.edit.emit(this.course);
  // }

  // public onApproveCourseDeletion(): void {
  //   this.delete.emit(this.course);
  // }
}
