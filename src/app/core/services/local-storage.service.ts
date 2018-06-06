import { Injectable } from '@angular/core';

import { Credentials } from '../../shared/interfaces/credentials';

@Injectable()

export class LocalStorageService {
  public loadCredentials (): Credentials {
    try {
      const serializedCredentials: string = localStorage.getItem('credentials');
      if (serializedCredentials) {
        console.log(serializedCredentials);
        return JSON.parse(serializedCredentials);
      }
    } catch (err) {
      console.log(err);
    }
  }

  public storeCredentials (credentials: Credentials): void {
    try {
      const serializedCredentials: string = JSON.stringify(credentials);
      localStorage.setItem('credentials', serializedCredentials);
    } catch (err) {
      console.log(err);
    }
  }

  public wipeCredentials (): void {
    localStorage.removeItem('credentials');
  }
}
