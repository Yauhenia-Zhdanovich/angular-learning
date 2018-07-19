import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FetchAuthorService {
  private http: HttpClient;
  private baseUrl: string = 'http://localhost:3004';

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getAuthors(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`)
      .map((data: any) => {        
        const temp = data.map(item => {
          return {
            name: `${item.name.first} ${item.name.last}`,
            checked: false
          };
        });
        return temp;
      });
  }
}
