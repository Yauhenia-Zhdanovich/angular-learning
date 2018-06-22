import { Injectable } from '@angular/core';

import { Credentials } from '../../shared/interfaces/credentials';

@Injectable()

export class LocalStorageService {
  public loadToken (): string {
    try {
      const token: string = localStorage.getItem('userToken');
      if (token) {
        return token;
      }
    } catch (err) {
      console.log(err);
    }
  }

  public storeToken (token: string): void {
    try {
      localStorage.setItem('userToken', token);
    } catch (err) {
      console.log(err);
    }
  }

  public wipeCredentials (): void {
    localStorage.removeItem('userToken');
  }
}
