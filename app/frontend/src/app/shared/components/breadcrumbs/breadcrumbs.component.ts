import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  courseId: number;

  constructor(
    private route: ActivatedRoute,
    private readonly coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.initializeBreadcrumbs();
  }

  initializeBreadcrumbs(): void {
    this.home = {
      icon: 'pi pi-home',
      url: '/',
    };

    const links: any = [];

    links.push({
      label: 'Курсы',
      url: `/courses/`,
    });

    if (this.route.snapshot.url[1]?.path === 'new') {
      links.push({
        label: 'Новый курс',
      });
    }

    if (this.courseId) {
      this.coursesService.getCourseById(this.courseId).subscribe((course) => {
        links.push({
          label: course.title,
        });

        this.gfg = links;
      });
    }

    this.gfg = links;
  }
}
