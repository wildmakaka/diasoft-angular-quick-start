import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

import { ConfirmationService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-dia-course',
  templateUrl: './course.component.html',
  styleUrls: [],
  providers: [ConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  public onApproveCourseDeletion(): void {
    this.delete.emit(this.course);
  }

  constructor(
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {}

  showConfirmDeletionDialog() {
    this.confirmationService.confirm({
      header: `Подтверждаете удаление курса ` + this.course.name + ' ?',
      message:
        'Нажмите на кнопку "Да", для подтверждения удаления, либо "Нет" для отмены операции.',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'Нет',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => this.onApproveCourseDeletion(),
      acceptLabel: 'Да',
      acceptButtonStyleClass: 'p-button-danger',
    });
  }
}
