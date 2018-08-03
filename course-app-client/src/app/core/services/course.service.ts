import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';

import { COURSELIST } from '../../shared/mocks/mock-courses';
import { CourseItem } from '../../shared/interfaces/course.interface';
import { CourseData } from '../../shared/interfaces/course-data.interface';
import { BASE_URL } from '../../shared/constants/path-config';

@Injectable()
export class CourseService {
  private http: HttpClient;
  private baseUrl: string = BASE_URL;
  public state: string;
  public courseSubject: ReplaySubject<Array<CourseData>> = new ReplaySubject();

  constructor (
    http: HttpClient,
  ) {
    this.http = http;
    this.state = 'authorization';
  }

  public getCourses(pageCount: number): Observable<CourseData[]> {
    const urlParams: HttpParams = new HttpParams().set('_limit', '5').set('_page', pageCount + '');
    return this.http.get<any>(`${this.baseUrl}/courses/courses/courses`, {params: urlParams});
  }

  public removeItem(id: number): Promise<any> {
    return this.http.delete(`${this.baseUrl}/courses/${id}`).toPromise();
  }

  public serverCourseSearch(query: string): void {
    const urlParams: HttpParams = new HttpParams().set('name_like', query);
    this.http.get(`${this.baseUrl}/courses/courses/courses`, {params: urlParams})
        .subscribe((data: CourseData[]) => {
          this.courseSubject.next(data);
        });
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
