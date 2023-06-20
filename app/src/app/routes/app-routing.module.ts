import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from 'src/app/modules/auth/components/login/login.component';
import { AuthGuardService } from 'src/app/modules/auth/services/auth-guard.service';
import AddCourseFormComponent from 'src/app/modules/courses/components/add-course-form/add-course-form.component';
import CoursesListComponent from 'src/app/modules/courses/components/courses-list/courses-list.component';
import EditCourseFormComponent from 'src/app/modules/courses/components/edit-course-form/edit-course-form.component';
import NotFoundComponent from 'src/app/shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'courses',
    component: CoursesListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'courses/new',
    component: AddCourseFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'courses/:id',
    component: EditCourseFormComponent,
    canActivate: [AuthGuardService],
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
