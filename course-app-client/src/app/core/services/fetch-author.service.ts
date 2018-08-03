import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FetchAuthorService {
  private http: HttpClient;
  private baseUrl: string = 'http://localhost:3004';

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getAuthors(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`).pipe(map((data: any) => {
      const temp: string[] = data.map(item => {
         return `${item.name.first} ${item.name.last}`;
      });
      return temp;
    }));
  }
}
