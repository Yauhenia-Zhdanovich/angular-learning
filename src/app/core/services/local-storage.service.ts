import { Injectable } from '@angular/core';
import { Credentials } from './credentials';

@Injectable()

export class LocalStorageService {
  public loadCredentials (): any {
    try {
      const serializedCredentials: any = localStorage.getItem('credentials');
      if (!!serializedCredentials) {
        return false;
      }
      return JSON.parse(serializedCredentials);
    } catch (err) {
      return;
    }
  }
  public storeCredentials (credentials: Credentials): void {
    try {
      const serializedCredentials: string = JSON.stringify(credentials);
      localStorage.setItem('credentials', serializedCredentials);
    } catch (err) {
      return;
    }
  }
  public wipeCredentials (): void {
    localStorage.removeItem('credentials');
  }
}
