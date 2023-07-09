import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginFormComponent from 'src/app/modules/auth/components/login-form/login-form.component';
import { AuthGuardService } from 'src/app/modules/auth/services/auth-guard.service';
import AddCourseFormComponent from 'src/app/modules/courses/components/add-course-form/add-course-form.component';
import CoursesListComponent from 'src/app/modules/courses/components/courses-list/courses-list.component';
import EditCourseFormComponent from 'src/app/modules/courses/components/edit-course-form/edit-course-form.component';
import NotFoundComponent from 'src/app/shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: '',
    component: CoursesListComponent,
    canActivate: [AuthGuardService],
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
