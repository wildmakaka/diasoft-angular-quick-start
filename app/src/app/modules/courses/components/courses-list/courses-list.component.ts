import { Component, OnInit } from '@angular/core';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

@Component({
  selector: 'app-dia-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export default class CoursesListComponent implements OnInit {
  public courses: CourseInterface[] = [];
  public searchText: string = '';

  ngOnInit(): void {
    this.courses = [
      {
        id: 11,
        name: 'БС Диасофт Angular',
        creationDate: new Date(2023, 4, 29),
        durationMinutes: 64 * 60,
        description:
          'Курс подготовлен в компании Диасофт для начинающих разработчиков Angular',
        topRated: true,
      },
      {
        id: 12,
        name: 'БС Диасофт Аналитик',
        creationDate: new Date(2022, 11, 11),
        durationMinutes: 64 * 60 + 30,
        description:
          'Курс подготовлен в компании Диасофт для начинающих Аналитиков',
        topRated: false,
      },
      {
        id: 13,
        name: 'БС Диасофт Qpalette',
        creationDate: new Date(2022, 12, 12),
        durationMinutes: 55,
        description:
          'Курс подготовлен в компании Диасофт для начинающих разработчиков Qpalette',
        topRated: true,
      },
      {
        id: 14,
        name: 'БС Диасофт Java разработчик',
        creationDate: new Date(2022, 9, 11),
        durationMinutes: 50 * 60 + 30,
        description:
          'Курс подготовлен в компании Диасофт для начинающих Java разработчиков',
        topRated: false,
      },
      {
        id: 14,
        name: 'БС Диасофт QBPM',
        creationDate: new Date(2023, 5, 1),
        durationMinutes: 20 * 60,
        description:
          'Курс подготовлен в компании Диасофт для начинающих разбираться в QBPM',
        topRated: false,
      },
    ];
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
    console.log('Delete course ....' + course.id);
  }
}
