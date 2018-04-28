import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { Credentials } from '../../shared/interfaces/credentials';

@Injectable()
export class AuthService {
  private localStorageService: LocalStorageService;

  constructor(localStorageService: LocalStorageService) {
    this.localStorageService = localStorageService;
  }

  public isAuth(): boolean {
    let credentials: Credentials = this.localStorageService.loadCredentials();
    if (credentials) {
      return true;
    }
    return false;
  }

  public logIn (cred: Credentials): void {
    this.localStorageService.storeCredentials(cred);
  }

  public logOut (): void {
    this.localStorageService.wipeCredentials();
  }

  public getUserInfo(): string {
    let credentials: Credentials = this.localStorageService.loadCredentials();
    return credentials.login;
  }
}
