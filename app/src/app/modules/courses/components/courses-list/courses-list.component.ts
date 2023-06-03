import { Component, OnInit } from '@angular/core';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export default class CoursesListComponent implements OnInit {
  public courses: CourseInterface[] = [];
  public searchText: string = '';

  constructor(private readonly coursesService: CoursesService) {}

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
}
