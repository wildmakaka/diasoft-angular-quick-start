import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-course',
  templateUrl: './course.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CourseComponent {
  @Input() course: CourseInterface = {} as CourseInterface;

  @Output() edit: EventEmitter<CourseInterface> =
    new EventEmitter<CourseInterface>();

  @Output() delete: EventEmitter<CourseInterface> =
    new EventEmitter<CourseInterface>();

  editCourse(): void {
    this.edit.emit(this.course);
  }

  showConfirmDeletionDialog(): void {
    this.delete.emit(this.course);
  }
}
