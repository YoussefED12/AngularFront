import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { InstructorComponent } from './instructor.component';

const routes: Routes = [
  { 
    path: '',
    component: InstructorComponent,
    children :[
      { path: 'addCourse', component: AddCourseComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
