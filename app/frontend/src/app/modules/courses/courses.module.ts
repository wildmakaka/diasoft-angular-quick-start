import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import AddCourseFormComponent from 'src/app/modules/courses/components/add-course-form/add-course-form.component';
import CourseComponent from 'src/app/modules/courses/components/course/course.component';
import CoursesListComponent from 'src/app/modules/courses/components/courses-list/courses-list.component';
import EditCourseFormComponent from 'src/app/modules/courses/components/edit-course-form/edit-course-form.component';
import HighlightCoursesDirective from 'src/app/modules/courses/directives/highlight-courses.directive';
import DurationPipe from 'src/app/modules/courses/pipes/duration.pipe';
import BreadcrumbsComponent from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import LoadingComponent from 'src/app/shared/components/loading/loading.component';
import SearchComponent from 'src/app/shared/components/search/search.component';
import FilterPipe from 'src/app/shared/pipes/filter.pipe';
import SortPipe from 'src/app/shared/pipes/sort.pipe';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ButtonModule,
    FormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    InputTextModule,
    InputTextareaModule,
    CalendarModule,
    InputNumberModule,
    TagModule,
    CardModule,
    MessagesModule,
    MessageModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
  ],
  declarations: [
    CoursesListComponent,
    CourseComponent,
    AddCourseFormComponent,
    EditCourseFormComponent,
    HighlightCoursesDirective,
    DurationPipe,
    FilterPipe,
    SortPipe,
    SearchComponent,
    BreadcrumbsComponent,
    LoadingComponent,
  ],
  exports: [CoursesListComponent, BreadcrumbsComponent],
})
export default class CoursesModule {}
