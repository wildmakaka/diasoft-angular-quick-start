import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-courses-list',
  templateUrl: './courses-list.component.html',
  providers: [ConfirmationService],
  styleUrls: ['./courses-list.component.scss'],
})
export default class CoursesListComponent implements OnInit {
  public courses$: Observable<CourseInterface[]> =
    this.coursesService.getCourses();

  public searchText: string = '';

  constructor(
    private router: Router,
    private readonly coursesService: CoursesService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {}

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log('Search ' + searchValue);
  }

  loadMoreCourses(): void {
    this.courses$ = this.coursesService.loadMoreCourses();
  }

  editCourse(course: CourseInterface): void {
    this.router.navigate([`/courses/${course.id}`]);
  }

  onApproveCourseDeletion(course: CourseInterface): void {
    this.coursesService.removeCourse(course).subscribe((data) => {
      console.log('success removeCourse');
    });
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
