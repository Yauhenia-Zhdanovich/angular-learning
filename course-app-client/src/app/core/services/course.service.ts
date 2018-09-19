import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { COURSELIST } from '../../shared/mocks/mock-courses';
import { CourseItem, CourseData } from '../../shared/interfaces';
import { BASE_URL } from '../../shared/constants/path-config';
import { Course } from '../../shared/classes/course.class';

@Injectable()
export class CourseService {
  private http: HttpClient;
  private baseUrl: string = BASE_URL;
  public state: string;
  public courseSubject: ReplaySubject<string> = new ReplaySubject();

  constructor (
    http: HttpClient,
  ) {
    this.http = http;
    this.state = 'authorization';
  }

  public getCourses(pageCount: number): Observable<CourseData[]> {
    const urlParams: HttpParams = new HttpParams().set('_limit', '5').set('_page', pageCount + '');
    return this.http.get<any>(`${this.baseUrl}/courses/courses/courses`, {params: urlParams}).pipe(
      map(courses => {
        return courses.map(element => new Course(
          element.id,
          element.name,
          element.date,
          element.length,
          element.description,
          element.isTopRated));
      }),
      catchError(error => of(error))
    );
  }

  public removeItem(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/courses/${id}`);
  }

  public onSearchAction(query: string): void {
    this.courseSubject.next(query);
  }

  public serverCourseSearch(query: string): Observable<any> {
    const urlParams: HttpParams = new HttpParams().set('name_like', query);    
    return this.http.get(`${this.baseUrl}/courses/courses/courses`, {params: urlParams}).pipe(
      map((courses: CourseData[]) => {        
        return courses.map(element => new Course(
          element.id,
          element.name,
          element.date,
          element.length,
          element.description,
          element.isTopRated));
      }),
      catchError(error => of(error))
    );
  }

  public getSpecificCourse(id: string): Observable<{}> {
    return this.http.get(`${this.baseUrl}/courses/${id}`);
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
