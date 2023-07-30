import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

import { ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'dia-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export default class AddCourseFormComponent implements OnInit {
  addNewCourseForm: FormGroup = new FormGroup({
    courseName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(50),
    ]),
    courseDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(500),
    ]),
    courseDurationInMinutes: new FormControl('10', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    courseCreationDate: new FormControl('', Validators.required),
    courseAuthors: new FormControl('', Validators.required),
  });
  msgs: Message[];

  countries: any[] | undefined;

  selectedCountries: any[] | undefined;

  filteredCountries: any[];

  constructor(
    private readonly coursesService: CoursesService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.coursesService.getCountries().then((countries: any) => {
      console.log(countries);
      this.countries = countries;
    });
    // this.coursesService.getCourseAuthors().subscribe((data: any) => {
    //   this.countries = data;
    // });
  }

  filterCountry(event: AutoCompleteCompleteEvent) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    console.log('query');
    console.log(query);

    console.log('this.countries');
    console.log(this.countries);
    console.log('length');
    console.log((this.countries as any[]).length);

    for (let i = 0; i < (this.countries as any[]).length; i++) {
      let country = (this.countries as any[])[i];

      console.log('country');
      console.log(country);

      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    // filtered.push({ id: 123, name: 'Grider' });

    this.filteredCountries = filtered;
  }

  get courseName() {
    return this.addNewCourseForm.get('courseName') as FormControl;
  }

  get courseDescription() {
    return this.addNewCourseForm.get('courseDescription') as FormControl;
  }

  get courseDurationInMinutes() {
    return this.addNewCourseForm.get('courseDurationInMinutes') as FormControl;
  }

  addSuccessMessage() {
    this.msgs = [
      {
        severity: 'success',
        summary: 'Success',
        detail: 'Информация о новом БС успешно добавлена!',
      },
    ];
  }

  addErrorMessage() {
    this.msgs = [
      {
        severity: 'error',
        summary: 'Error',
        detail: 'Вы не заполнили все необходимые поля данными!',
      },
    ];
  }

  onSubmit() {
    const authors = [
      {
        id: '5b7a84624010db4d640e0099',
        name: 'Brad',
        lastName: 'Traversy',
      },
    ];

    const addNewCourseForm = this.addNewCourseForm.value;

    if (
      !addNewCourseForm.courseName ||
      !addNewCourseForm.courseDescription ||
      !addNewCourseForm.courseDurationInMinutes ||
      !addNewCourseForm.courseCreationDate
    ) {
      this.addErrorMessage();
      return;
    }

    const newCourse: CourseInterface = {
      id: Math.floor(Math.random() * 10) + 20,
      title: addNewCourseForm.courseName,
      description: addNewCourseForm.courseDescription,
      duration: addNewCourseForm.courseDurationInMinutes,
      creationDate: addNewCourseForm.courseCreationDate,
      topRated: false,
      authors,
    };

    this.coursesService.addCourse(newCourse).subscribe((data) => {});
    this.addSuccessMessage();
  }
}
