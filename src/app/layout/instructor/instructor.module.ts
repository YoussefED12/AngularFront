import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructorComponent } from './instructor.component';


@NgModule({
  imports: [
    CommonModule,
    InstructorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    InstructorComponent,
    AddCourseComponent,
    ]
})
export class InstructorModule { }
