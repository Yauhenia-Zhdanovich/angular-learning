import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { ReplaySubject } from 'rxjs';
import { Observable } from 'rxjs';

import { LocalStorageService } from './local-storage.service';
import { Credentials } from '../../shared/interfaces/credentials';
import { BASE_URL } from '../../shared/constants/path-config';
import { ROUTES_CONFIG } from '../../../../app-config/routes/routes.config';
import { User } from '../../shared/interfaces/user.interface';

@Injectable()
export class AuthService {
  private router: Router;
  private localStorageService: LocalStorageService;
  private http: HttpClient;
  private baseUrl: string = BASE_URL;
  public isAuthenticatedSubject: ReplaySubject<boolean> = new ReplaySubject();

  constructor(
    localStorageService: LocalStorageService,
    http: HttpClient,
    router: Router
  ) {
    this.router = router;
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
      .subscribe((data: User[]) => {
        if (data.length) {
          token = data[0].fakeToken;
          this.localStorageService.storeToken(token);
          this.router.navigate([ROUTES_CONFIG.homeAbsolutePath]);
          this.isAuthenticatedSubject.next(true);
        } else {
          this.isAuthenticatedSubject.next(false);
        }
      });
  }

  public logOut(): void {
    this.localStorageService.wipeToken();
  }

  public getUserInfo(): Observable<any> {
    const token: string = this.localStorageService.loadToken();
    const urlParams: HttpParams = new HttpParams().set('fakeToken', token);
    return this.http.request('GET', `${this.baseUrl}/users`, { params: urlParams });
  }

  public getToken(): string {
    return this.localStorageService.loadToken();
  }
}
