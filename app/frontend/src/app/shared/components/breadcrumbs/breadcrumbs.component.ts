import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import CoursesService from 'src/app/modules/courses/services/courses.service';

@Component({
  selector: 'app-dia-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export default class BreadcrumbsComponent implements OnInit {
  gfg: MenuItem[] = [];
  home: MenuItem = {};

  // private coursesSubscription: Subscription;
  // courses: CourseInterface[] | null;

  constructor(private readonly coursesService: CoursesService) {}

  ngOnInit() {
    this.home = {
      icon: 'pi pi-home',
      url: '/',
    };

    this.initializeBreadcrumbs();

    // this.coursesSubscription = this.coursesService
    //   .getCourses()
    //   .pipe(take(1))
    //   .subscribe((courses: CourseInterface[] | null) => {
    //     this.courses = courses;
    //     this.initializeBreadcrumbs();
    //   });
  }

  initializeBreadcrumbs(): void {
    const links = [];

    links.push({
      label: 'Курсы',
      url: `/courses/`,
    });

    // if (this.courses) {
    //   for (let i = 0; i < this.courses.length; i++) {
    //     links.push({
    //       label: this.courses[i].title,
    //       url: `/courses/`,
    //     });
    //   }
    //   this.gfg = links;
    // }

    this.gfg = links;
  }

  // ngOnDestroy(): void {
  //   this.coursesSubscription.unsubscribe();
  // }
}
