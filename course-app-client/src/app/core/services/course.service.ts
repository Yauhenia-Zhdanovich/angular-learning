import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Response, RequestOptions, Request, RequestMethod, URLSearchParams } from '@angular/http';

import { COURSELIST } from '../../shared/mocks/mock-courses';
import { CourseItem } from '../../shared/interfaces/course.interface';
import { Course } from '../../shared/classes/course.class';
import { HttpService } from './secureHttp.service';
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
  private secureHttp: HttpService;
  private twoWeeks: number = MILLISEC_PER_DAY * DAYS_IN_WEEK;
  private baseUrl: string = 'http://localhost:3004';
  public state: string;
  public courseSubject: ReplaySubject<any> = new ReplaySubject();

  constructor (
    http: HttpClient,
    secureHttp: HttpService
  ) {
    this.http = http;
    this.secureHttp = secureHttp;
    this.state = 'authorization';
  }

  public getCourses (pageCount: number): Observable<any> {
    let requestOptions: RequestOptions = new RequestOptions();
    let request: Request;
    let urlSearchParams: URLSearchParams = new URLSearchParams();
    urlSearchParams.set('_page', pageCount + '');
    urlSearchParams.set('_limit', '5');
    requestOptions.method = RequestMethod.Get;
    requestOptions.search = urlSearchParams;
    requestOptions.url = `${this.baseUrl}/courses/courses/courses`;
    request = new Request(requestOptions);
    return this.secureHttp.request(request)
        .map((res: Response) => res.json());
  }

  public removeItem (id: number): Promise<any> {
    return this.http.delete(`${this.baseUrl}/courses/${id}`).toPromise();
  }

  public serverCourseSearch(query: string): Observable<CourseItem[]> {
    let requestOptions: RequestOptions = new RequestOptions();
    let request: Request;
    let urlSearchParams: URLSearchParams = new URLSearchParams();
    urlSearchParams.set('name_like', query);
    requestOptions.method = RequestMethod.Get;
    requestOptions.search = urlSearchParams;
    requestOptions.url = `${this.baseUrl}/courses/courses/courses`;
    request = new Request(requestOptions);
    return this.secureHttp.request(request)
        .map((res: Response) => res.json())
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
