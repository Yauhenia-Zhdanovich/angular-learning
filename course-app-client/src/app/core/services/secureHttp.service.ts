import { Injectable } from '@angular/core';
import {
  Http,
  XHRBackend,
  RequestOptions,
  Request,
  RequestOptionsArgs,
  Response,
  Headers,
} from '@angular/http';

import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http {

  constructor (backend: XHRBackend, options: RequestOptions) {
    const token: string = localStorage.getItem('userToken');
    options.headers.set('Authorization', `Bearer ${token}`);
    super(backend, options);
  }

  // TODO ask about it
  private catchAuthError (self: HttpService): any {
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        console.log(res);
      }
      return Observable.throw(res.statusText);
    };
  }
  
  // TODO ask about it
  public request(url: string | Request, options?: RequestOptionsArgs): Observable<any> {
    const token: string = localStorage.getItem('userToken');
    if (typeof url === 'string') { 
      if (!options) {
        options = { headers: new Headers() };
      }
      options.headers.set('Authorization', `Bearer ${token}`);
    } else {
      url.headers.set('Authorization', `Bearer ${token}`);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }  
}
