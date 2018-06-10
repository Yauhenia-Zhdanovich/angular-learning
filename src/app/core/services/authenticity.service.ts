import { Injectable } from "@angular/core";

import { LocalStorageService } from "./local-storage.service";
import { Credentials } from "../../shared/interfaces/credentials";
import { Subject } from "rxjs/Subject";
import { ReplaySubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {
  private localStorageService: LocalStorageService;
  public isAuthenticatedSubject: ReplaySubject<
    Credentials
  > = new ReplaySubject();

  constructor(
    localStorageService: LocalStorageService,
    private http: HttpClient
  ) {
    this.localStorageService = localStorageService;
  }

  public isAuth(): boolean {
    let credentials: Credentials = this.localStorageService.loadCredentials();
    return !!credentials;
  }

  public test(): any {
    return this.http.get("http://localhost:3004/db");
    // return this.http.request('/users');
   }

  public logIn(cred: Credentials): void {
    this.isAuthenticatedSubject.next(cred);
    this.localStorageService.storeCredentials(cred);
  }

  public logOut(): void {
    this.isAuthenticatedSubject.next({ login: "", password: "" });
    this.localStorageService.wipeCredentials();
  }

  public getUserInfo(): string {
    let credentials: Credentials = this.localStorageService.loadCredentials();
    return credentials.login;
  }
}
