import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';
import CoursesService from 'src/app/modules/courses/services/courses.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'dia-edit-course-form',
  templateUrl: './edit-course-form.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export default class EditCourseFormComponent implements OnInit, OnDestroy {
  editNewCourseForm: FormGroup = new FormGroup({
    courseName: new FormControl('', Validators.required),
    courseDescription: new FormControl('', Validators.required),
    courseDurationInMinutes: new FormControl('', Validators.required),
    courseCreationDate: new FormControl('', Validators.required),
  });
  msgs: Message[];

  courseId: number;

  countries: any[] = [];

  selectedCountries: any[] = [];

  filteredCountries: any[];

  constructor(
    private route: ActivatedRoute,
    private readonly coursesService: CoursesService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    // this.selectedCountries?.push({ id: '1', name: '123' });
    // this.coursesService.getCountries().then((countries: any) => {
    //   this.countries = countries;
    // });
    this.coursesService
      .getCourseAuthors()

      // .pipe(
      //   tap((value: any) => {
      //     // console.log('tap value');
      //     // console.log(value);
      //     // this.countries = value;
      //   })
      // )

      .subscribe({
        next: (data: any) => (this.countries = data),
        complete: () => this.doSomething(),
      });

    this.courseId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.courseId) {
      return;
    }

    this.coursesService.getCourseById(this.courseId).subscribe((course) => {
      const courseAuthors = this.coursesService.transformAuthorsData(
        course.authors
      );

      courseAuthors.map((author) => this.selectedCountries?.push(author));

      // console.log('course');
      // console.log(courseAuthors);

      this.editNewCourseForm.patchValue({
        courseName: course.title,
        courseDescription: course.description,
        courseDurationInMinutes: course.duration,
        courseCreationDate: course.creationDate,
      });
    });
  }

  ngOnDestroy(): void {}

  get courseName() {
    return this.editNewCourseForm.get('courseName') as FormControl;
  }

  get courseDescription() {
    return this.editNewCourseForm.get('courseDescription') as FormControl;
  }

  get courseDurationInMinutes() {
    return this.editNewCourseForm.get('courseDurationInMinutes') as FormControl;
  }

  doSomething() {
    console.log('doSomething');
    console.log(this.countries);

    try {
      // this.selectedCountries?.push({ id: '1', name: '123' });
      // this.selectedCountries?.push(this.countries?.[0]);
      // this.selectedCountries?.push(this.countries?.[1]);
      console.log('OK!');
    } catch (e) {
      console.log(e);
    }

    // console.log('this.selectedCountries');
    // console.log(this.selectedCountries);
  }

  addSuccessMessage() {
    this.msgs = [
      {
        severity: 'success',
        summary: 'Success',
        detail: 'Информация о новом БС успешно обновлена!',
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

  filterCountry(event: AutoCompleteCompleteEvent) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;

    console.log('this.countriesx1');
    // console.log(this.countries);
    console.log(this.countries);
    // console.log(this.countries.length);
    // console.log((this.countries as any[])[1]);
    // filtered.push((this.countries as any[])[1]);
    // filtered.push((this.countries as any[])[0]);

    // this.selectedCountries?.push((this.countries as any[])[0]);

    // console.log('this.countriesx2');

    // for (const [key, value] of Object.entries(this.countries)) {
    //   console.log(`${key}: ${value}`);
    // }

    // this.countries.map((country) => {
    //   console.log('countryXXX');
    //   console.log(country);

    //   if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //     filtered.push(country);
    //   }
    // });

    // for (let i = 0; i < this.countries.length; i++) {
    //   let country = this.countries[i];

    //   if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //     filtered.push(country);
    //   }
    // }

    // filtered.push({ id: 123, name: 'Grider' });

    this.filteredCountries = filtered;
  }

  onSubmit() {
    console.log(this.selectedCountries);

    // const editNewCourseForm = this.editNewCourseForm.value;

    // if (
    //   !editNewCourseForm.courseName ||
    //   !editNewCourseForm.courseDescription ||
    //   !editNewCourseForm.courseDurationInMinutes ||
    //   !editNewCourseForm.courseCreationDate
    // ) {
    //   this.addErrorMessage();
    //   return;
    // }

    // const updatedCourse: CourseInterface = {
    //   id: this.courseId,
    //   title: editNewCourseForm.courseName,
    //   description: editNewCourseForm.courseDescription,
    //   duration: editNewCourseForm.courseDurationInMinutes,
    //   creationDate: editNewCourseForm.courseCreationDate,
    //   topRated: false,
    //   authors: [
    //     {
    //       id: 1370,
    //       name: 'Polly',
    //       lastName: 'Sosa',
    //     },
    //   ],
    // };

    // this.coursesService.updateCourse(updatedCourse).subscribe((data) => {
    //   console.log('course update success');
    // });
    // this.addSuccessMessage();
  }
}
