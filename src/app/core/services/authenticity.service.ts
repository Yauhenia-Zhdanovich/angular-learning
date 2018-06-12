import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { Credentials } from '../../shared/interfaces/credentials';
// import { User } from '../../shared/interfaces/user.interface';
import { ReplaySubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AuthService {
  private localStorageService: LocalStorageService;
  private http: HttpClient;
  private baseUrl: string = 'http://localhost:3004';
  public isAuthenticatedSubject: ReplaySubject<Credentials> = new ReplaySubject();

  constructor(
    localStorageService: LocalStorageService,
    http: HttpClient
  ) {
    this.localStorageService = localStorageService;
    this.http = http;
  }

  public isAuth(): boolean {
    let credentials: Credentials = this.localStorageService.loadCredentials();
    return !!credentials;
  }

  public test(): any {
    return this.http.get(`${this.baseUrl}/users`);
   }

   public searchForUser(name: string, password: string): Observable<any> {
     const urlParams: HttpParams = new HttpParams().set('login', name).set('password', password);
     return this.http.request('GET', `${this.baseUrl}/users`, { params: urlParams });
   }

  public logIn(cred: Credentials): void {
    this.searchForUser(cred.login, cred.password).subscribe(data => {
      if (data.length) {
        this.localStorageService.storeCredentials(cred);
      }
    });
    this.isAuthenticatedSubject.next(cred);
  }

  public logOut(): void {
    this.isAuthenticatedSubject.next({ login: '', password: '' });
    this.localStorageService.wipeCredentials();
  }

  public getUserInfo(): string {
    let credentials: Credentials = this.localStorageService.loadCredentials();
    return credentials.login;
  }
}
