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

  constructor(private readonly coursesService: CoursesService) {}

  ngOnInit() {
    this.home = {
      icon: 'pi pi-home',
      url: '/',
    };

    const links = [];

    const courses = this.coursesService.getCourses();

    for (let i = 0; i < courses.length; i++) {
      links.push({
        label: courses[i].name,
        // url: `/courses/${courses[i].id}`,
        url: `/courses/`,
      });
    }

    this.gfg = links;
  }
}
