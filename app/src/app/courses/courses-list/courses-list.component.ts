import { Component, OnInit } from '@angular/core';
import { CourseInterface } from 'src/app/types/course.interface copy';

@Component({
  selector: 'app-dia-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  public courses: CourseInterface[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 11,
        title: 'БС Диастофт Ангуляр',
        creationDate: '01.01.2011',
        durationMinutes: '11 часов',
        description:
          'Курс подготовлен в компании Диасофт для Ангуляр разработчиков',
      },
      {
        id: 12,
        title: 'БС Диастофт Аналитик',
        creationDate: '02.02.2012',
        durationMinutes: '12 часов',
        description: 'Курс подготовлен в компании Диасофт для Аналитиков',
      },
      {
        id: 13,
        title: 'БС Диастофт Qpalette',
        creationDate: '03.03.2013',
        durationMinutes: '13 часов',
        description:
          'Курс подготовлен в компании Диасофт для Qpalette разработчиков',
      },
      {
        id: 13,
        title: 'БС Диастофт Java разработчик',
        creationDate: '11.11.2014',
        durationMinutes: '14 часов',
        description:
          'Курс подготовлен в компании Диасофт для Java разработчиков',
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
