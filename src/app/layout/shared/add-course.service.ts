import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewCourse } from 'src/models/newCourse';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {

  public BaseUrl = 'http://localhost:9090' ;

  constructor(private http : HttpClient) { }

  public addCourse(course : NewCourse) : Observable<any> {
    return this.http.post(this.BaseUrl +'/training/placeTrail', course ) ;
  }
}
