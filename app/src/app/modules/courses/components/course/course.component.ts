import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

import { ConfirmationService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-dia-course',
  templateUrl: './course.component.html',
  styleUrls: [],
  providers: [ConfirmationService],
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
      header: `Подтвердите удаление курса ` + this.course.name + ' ?',
      message: 'Нажмите на кнопку "Да", для подтверждения вашего выбора',
      icon: 'pi pi-exclamation-triangle',
      accept: () => this.onApproveCourseDeletion(),
    });
  }
}
