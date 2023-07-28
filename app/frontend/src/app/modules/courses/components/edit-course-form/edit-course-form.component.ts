import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message, MessageService, PrimeNGConfig } from 'primeng/api';
import CoursesService from 'src/app/modules/courses/services/courses.service';
import { CourseInterface } from 'src/app/modules/courses/types/course.interface';

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
export default class EditCourseFormComponent implements OnInit {
  editNewCourseForm: FormGroup = new FormGroup({
    courseName: new FormControl('', Validators.required),
    courseDescription: new FormControl('', Validators.required),
    courseDurationInMinutes: new FormControl('', Validators.required),
    courseCreationDate: new FormControl('', Validators.required),
  });
  msgs: Message[];

  courseId: number;

  countries: any[] | undefined;

  selectedCountries: any[] | undefined;

  filteredCountries: any[];

  constructor(
    private route: ActivatedRoute,
    private readonly coursesService: CoursesService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.coursesService.getCountries().then((countries: any) => {
      console.log(countries);
      this.countries = countries;
    });

    this.courseId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.courseId) {
      return;
    }

    this.coursesService.getCourseById(this.courseId).subscribe((course) => {
      console.log(course.authors);

      // let filtered: any[] = [];

      // filtered.push({ id: 123, name: 'Grider' });

      // this.filteredCountries = filtered;

      this.editNewCourseForm.patchValue({
        courseName: course.title,
        courseDescription: course.description,
        courseDurationInMinutes: course.duration,
        courseCreationDate: course.creationDate,
      });
    });
  }

  get courseName() {
    return this.editNewCourseForm.get('courseName') as FormControl;
  }

  get courseDescription() {
    return this.editNewCourseForm.get('courseDescription') as FormControl;
  }

  get courseDurationInMinutes() {
    return this.editNewCourseForm.get('courseDurationInMinutes') as FormControl;
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

  onSubmit() {
    const editNewCourseForm = this.editNewCourseForm.value;

    if (
      !editNewCourseForm.courseName ||
      !editNewCourseForm.courseDescription ||
      !editNewCourseForm.courseDurationInMinutes ||
      !editNewCourseForm.courseCreationDate
    ) {
      this.addErrorMessage();
      return;
    }

    const updatedCourse: CourseInterface = {
      id: this.courseId,
      title: editNewCourseForm.courseName,
      description: editNewCourseForm.courseDescription,
      duration: editNewCourseForm.courseDurationInMinutes,
      creationDate: editNewCourseForm.courseCreationDate,
      topRated: false,
      authors: [
        {
          id: 1370,
          name: 'Polly',
          lastName: 'Sosa',
        },
      ],
    };

    this.coursesService.updateCourse(updatedCourse).subscribe((data) => {
      console.log('course update success');
    });
    this.addSuccessMessage();
  }
}
