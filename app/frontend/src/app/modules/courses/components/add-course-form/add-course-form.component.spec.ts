import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import AddCourseFormComponent from 'src/app/modules/courses/components/add-course-form/add-course-form.component';
import DurationPipe from 'src/app/modules/courses/pipes/duration.pipe';
import BreadcrumbsComponent from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';

describe('AddCourseFormComponent', () => {
  let component: AddCourseFormComponent;
  let fixture: ComponentFixture<AddCourseFormComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      paramMap: convertToParamMap({ id: '8693' }),
    },
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        StoreModule.forRoot({}),
        HttpClientModule,
        MessagesModule,
        MessageModule,
        CardModule,
        ButtonModule,
        BreadcrumbModule,
        InputNumberModule,
        CalendarModule,
        AutoCompleteModule,
      ],
      declarations: [
        AddCourseFormComponent,
        BreadcrumbsComponent,
        DurationPipe,
      ],
      providers: [{ provide: ActivatedRoute, useValue: fakeActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 5 fields initially', () => {
    const element = fixture.debugElement;
    const fields = element.queryAll(By.css('.p-float-label'));

    expect(fields.length).toBe(5);
  });

  it('should submit form', (done) => {
    const form = fixture.debugElement.query(By.css('form'));
    spyOn(component, 'onSubmit');
    component.addNewCourseForm.patchValue({
      username: 'test',
      email: 'test@test',
      password: '1234',
    });

    form.triggerEventHandler('ngSubmit');
    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
