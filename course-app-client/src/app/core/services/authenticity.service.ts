import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { LocalStorageService } from './local-storage.service';
import { Credentials } from '../../shared/interfaces/credentials';
import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

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
    const token: string = this.localStorageService.loadToken();
    return !!token;
  }

  public logIn({login, password }: Credentials): void {
    let token: string;
    const urlParams: HttpParams = new HttpParams().set('login', login).set('password', password);
    this.http.request('GET', `${this.baseUrl}/users`, { params: urlParams })
      .subscribe(data => token = data[0].fakeToken);
    this.isAuthenticatedSubject.next({login, password});
    this.localStorageService.storeToken(token);
  }

  public logOut(): void {
    this.isAuthenticatedSubject.next({login: '', password: ''});
    this.localStorageService.wipeToken();
  }

  // TODO ask about it!
  public getUserInfo(): Observable<any> {
    const token: string = this.localStorageService.loadToken();
    const urlParams: HttpParams = new HttpParams().set('fakeToken', token);
    return this.http.request('GET', `${this.baseUrl}/users`, { params: urlParams });
  }

  public getToken(): string {
    return this.localStorageService.loadToken();
  }
}
