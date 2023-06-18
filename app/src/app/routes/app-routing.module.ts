import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AddCourseFormComponent from 'src/app/modules/courses/components/add-course-form/add-course-form.component';
import CoursesListComponent from 'src/app/modules/courses/components/courses-list/courses-list.component';
import NotFoundComponent from 'src/app/shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent,
  },
  {
    path: 'courses',
    component: CoursesListComponent,
  },
  {
    path: 'courses/new',
    component: AddCourseFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
