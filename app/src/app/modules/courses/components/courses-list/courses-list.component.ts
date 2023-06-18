import { Component, OnInit } from '@angular/core';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-courses-list',
  templateUrl: './courses-list.component.html',
  providers: [ConfirmationService],
  styleUrls: ['./courses-list.component.scss'],
})
export default class CoursesListComponent implements OnInit {
  public courses: CourseInterface[] = [];
  public searchText: string = '';

  constructor(
    private readonly coursesService: CoursesService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  public onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  public loadMore(): void {
    console.log('Load More ....');
  }

  public editCourse(course: CourseInterface): void {
    console.log('Edit course ....' + course.id);
  }

  public deleteCourse(course: CourseInterface): void {
    this.coursesService.removeCourse(course);
    this.courses = this.coursesService.getCourses();
  }

  showConfirmDeletionDialog() {
    // header: `Подтверждаете удаление курса ` + this.course.name + ' ?',
    this.confirmationService.confirm({
      header: `Подтверждаете удаление курса ?`,
      message:
        'Нажмите на кнопку "Да", для подтверждения удаления, либо "Нет" для отмены операции.',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'Нет',
      rejectButtonStyleClass: 'p-button-text',
      // accept: () => this.onApproveCourseDeletion(),
      acceptLabel: 'Да',
      acceptButtonStyleClass: 'p-button-danger',
    });
  }

  // @Output() public delete: EventEmitter<CourseInterface> =
  //   new EventEmitter<CourseInterface>();

  // public onApproveCourseDeletion(): void {
  //   this.delete.emit(this.course);
  // }
}
