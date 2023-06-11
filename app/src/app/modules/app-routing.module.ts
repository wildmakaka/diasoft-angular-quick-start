import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import CoursesListComponent from 'src/app/modules/courses/components/courses-list/courses-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
