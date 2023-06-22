import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private readonly coursesService: CoursesService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  loadMore(): void {
    console.log('Load More ....');
  }

  editCourse(course: CourseInterface): void {
    this.router.navigate([`/courses/${course.id}`]);
  }

  onApproveCourseDeletion(course: CourseInterface): void {
    this.coursesService.removeCourse(course);
    this.courses = this.coursesService.getCourses();
  }

  showConfirmDeletionDialog(course: CourseInterface) {
    this.confirmationService.confirm({
      header: `Подтверждаете удаление курса ` + course.title + ' ?',
      message:
        'Нажмите на кнопку "Да", для подтверждения удаления, либо "Нет" для отмены операции.',
      icon: 'pi pi-exclamation-triangle',
      reject: () => this.confirmationService.close(),
      rejectLabel: 'Нет',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => this.onApproveCourseDeletion(course),
      acceptLabel: 'Да',
      acceptButtonStyleClass: 'p-button-danger',
    });
  }
}
