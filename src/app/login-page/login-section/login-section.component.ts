import { Component, OnInit } from "@angular/core";

import { AuthService } from "../../core/services/authenticity.service";
import { Credentials } from "../../shared/interfaces/credentials";

@Component({
  selector: "login-section",
  templateUrl: "./login-section.component.html",
  styleUrls: ["./login-section.component.css"]
  // providers: [ AuthService ]
})
export class LoginSectionComponent implements OnInit {
  public currentLogin: string;
  public currentPassword: string;
  public authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public ngOnInit(): void {
    this.authService.test().subscribe(data => console.log(data));
    this.authService.isAuthenticatedSubject.subscribe(
      (cred): void => console.log(cred, "from login-section component")
    );
  }

  public logIn(): void {
    let cred: Credentials = {
      login: this.currentLogin,
      password: this.currentPassword
    };
    this.authService.logIn(cred);
  }
}
