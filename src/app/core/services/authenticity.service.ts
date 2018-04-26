import { Injectable } from "@angular/core";
import { loadCredentials } from "./local-storage";

@Injectable()
export class AuthService {
  public savedLogin: string;
  public savedPassword: string;

  public isAuth(): boolean {
    let credentials = loadCredentials();
    if (!!credentials) {
      return true;
    }
    return false;
  }
}
