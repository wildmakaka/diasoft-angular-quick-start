import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';
import AddCourseComponent from 'src/app/modules/courses/components/add-course/add-course.component';
import CourseComponent from 'src/app/modules/courses/components/course/course.component';
import CoursesListComponent from 'src/app/modules/courses/components/courses-list/courses-list.component';
import HighlightCoursesDirective from 'src/app/modules/courses/directives/highlight-courses.directive';
import DurationPipe from 'src/app/modules/courses/pipes/duration.pipe';
import BreadcrumbsComponent from 'src/app/shared/components/breadcrumbs/breadcrumbs.component';
import SearchComponent from 'src/app/shared/components/search/search.component';
import FilterPipe from 'src/app/shared/pipes/filter.pipe';
import SortPipe from 'src/app/shared/pipes/sort.pipe';

const routes: Routes = [
  {
    path: 'courses/add',
    component: AddCourseComponent,
  },
];

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
  ],
  declarations: [
    CoursesListComponent,
    CourseComponent,
    AddCourseComponent,
    HighlightCoursesDirective,
    DurationPipe,
    FilterPipe,
    SortPipe,
    SearchComponent,
    BreadcrumbsComponent,
  ],
  exports: [CoursesListComponent, BreadcrumbsComponent],
})
export default class CoursesModule {}
