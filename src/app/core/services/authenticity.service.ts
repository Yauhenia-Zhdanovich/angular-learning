import { Injectable } from '@angular/core';
import {
  loadCredentials,
  storeCredentials,
  wipeCredentials,
} from './local-storage';
import { Credentials } from './credentials';

@Injectable()
export class AuthService {
  public isAuth(): boolean {
    let credentials: Credentials = loadCredentials();
    if (!!credentials) {
      return true;
    }
    return false;
  }
  public logIn ({login, password}): void {
    storeCredentials({login, password });
  }
  public logOut (): void {
    wipeCredentials();
  }
  public getUserInfo(): string {
    let credentials: Credentials = loadCredentials();
    return credentials.login;
  }
}
