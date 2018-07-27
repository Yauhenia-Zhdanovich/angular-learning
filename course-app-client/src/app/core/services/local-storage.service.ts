import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  public loadToken(): string {
    try {
      const token: string = localStorage.getItem('userToken');
      if (token) {
        return token;
      }
    } catch (err) {
      console.log(err);
    }
  }

  public storeToken(token: string): void {
    try {
      localStorage.setItem('userToken', token);
    } catch (err) {
      console.log(err);
    }
  }

  public wipeToken(): void {
    localStorage.removeItem('userToken');
  }
}
