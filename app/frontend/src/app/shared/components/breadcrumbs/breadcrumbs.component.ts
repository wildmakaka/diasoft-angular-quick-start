import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export default class BreadcrumbsComponent implements OnInit, OnDestroy {
  gfg: MenuItem[] = [];
  home: MenuItem = {};

  coursesSubscription: Subscription;
  courses: CourseInterface[] | null;

  constructor(private readonly coursesService: CoursesService) {}

  ngOnInit() {
    this.home = {
      icon: 'pi pi-home',
      url: '/',
    };

    this.coursesSubscription = this.coursesService
      .getCourses()
      .subscribe((courses: CourseInterface[] | null) => {
        this.courses = courses;
        this.initializeBreadcrumbs();
      });
  }

  initializeBreadcrumbs(): void {
    const links = [];

    if (this.courses) {
      for (let i = 0; i < this.courses.length; i++) {
        links.push({
          label: this.courses[i].title,
          url: `/courses/`,
        });
      }
      this.gfg = links;
      this.ngOnDestroy();
    }
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
  }
}
