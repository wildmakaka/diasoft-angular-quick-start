import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import CourseComponent from 'src/app/modules/courses/components/course/course.component';
import CoursesListComponent from 'src/app/modules/courses/components/courses-list/courses-list.component';
import SearchComponent from 'src/app/modules/courses/components/search/search.component';
import HighlightCoursesDirective from 'src/app/modules/courses/directives/highlight-courses.directive';
import DurationPipe from 'src/app/modules/courses/pipes/duration.pipe';
import FilterPipe from 'src/app/modules/courses/pipes/filter.pipe';
import SortPipe from 'src/app/modules/courses/pipes/sort.pipe';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    CoursesListComponent,
    CourseComponent,
    HighlightCoursesDirective,
    DurationPipe,
    FilterPipe,
    SortPipe,
    SearchComponent,
  ],
  exports: [CoursesListComponent],
})
export default class CoursesModule {}
