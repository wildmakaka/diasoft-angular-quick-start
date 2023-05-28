import { Component, OnInit } from '@angular/core';
import { CourseInterface } from 'src/app/types/course.interface';

@Component({
  selector: 'app-dia-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export default class CoursesListComponent implements OnInit {
  public courses: CourseInterface[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 11,
        title: 'БС Диастофт Ангуляр',
        creationDate: new Date(1995, 8, 1),
        durationMinutes: '11 часов',
        description:
          'Курс подготовлен в компании Диасофт для Ангуляр разработчиков',
        topRated: true,
      },
      {
        id: 12,
        title: 'БС Диастофт Аналитик',
        creationDate: new Date(1995, 8, 1),
        durationMinutes: '12 часов',
        description: 'Курс подготовлен в компании Диасофт для Аналитиков',
        topRated: false,
      },
      {
        id: 13,
        title: 'БС Диастофт Qpalette',
        creationDate: new Date(1995, 8, 1),
        durationMinutes: '13 часов 15 минут',
        description:
          'Курс подготовлен в компании Диасофт для Qpalette разработчиков',
        topRated: true,
      },
      {
        id: 14,
        title: 'БС Диастофт Java разработчик',
        creationDate: new Date(1995, 8, 1),
        durationMinutes: '14 часов',
        description:
          'Курс подготовлен в компании Диасофт для Java разработчиков',
        topRated: false,
      },
    ];
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
