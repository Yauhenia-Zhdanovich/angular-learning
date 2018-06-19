import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/authenticity.service';
import { Credentials } from '../../shared/interfaces/credentials';

@Component({
  selector: 'login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css'],
  providers: [ AuthService ]
})
export class LoginSectionComponent implements OnInit {
  public currentLogin: string;
  public currentPassword: string;
  public authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public ngOnInit(): void {
    // let isAuth: boolean = this.authService.isAuth();
  }
  public logIn(): void {
    let cred: Credentials = {login: this.currentLogin, password: this.currentPassword}
    this.authService.logIn(cred);
  }
}
