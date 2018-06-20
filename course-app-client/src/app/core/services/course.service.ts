import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { COURSELIST } from '../../shared/mocks/mock-courses';
import { CourseItem } from '../../shared/interfaces/course.interface';
import { Course } from '../../shared/classes/course.class';
import { MILLISEC_PER_DAY, DAYS_IN_WEEK } from '../../shared/constants/time-constants';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()

export class CourseService {
  private http: HttpClient;
  private twoWeeks: number = MILLISEC_PER_DAY * DAYS_IN_WEEK;
  private baseUrl: string = 'http://localhost:3004';
  public state: string;
  public courseSubject: ReplaySubject<any> = new ReplaySubject();
  public courses: any;

  constructor (http: HttpClient) {
    this.http = http;
    this.state = 'authorization';
  }

  public getCourses (): Observable<any> {
    return this.http.get(`${this.baseUrl}/courses/courses/courses`);
  }

  public removeItem (id: number): any {
    return this.http.delete(`${this.baseUrl}/courses/${id}`).toPromise();
  }

  public serverCourseSearch(query: string): any {
    const urlParams: HttpParams = new HttpParams().set('name_like', query);
    this.http.get(`${this.baseUrl}/courses/courses/courses`, { params: urlParams })
      .subscribe(data => {
        this.courseSubject.next(data);
      });
  }

  public createCourse(course: CourseItem ): void {
    COURSELIST.push(course);
  }

  public getItemById(id: number): CourseItem {
    const index: number = COURSELIST.findIndex((element) => {
        return element.id === id;
      }
    ) ;
    return COURSELIST[index];
  }

  public updateItem(course: CourseItem): void {
    COURSELIST.splice(course.id, 1, course);
  }
}
