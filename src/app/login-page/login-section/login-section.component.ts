import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/authenticity.service';

@Component({
  selector: 'login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css'],
  providers: [ AuthService ]
})
export class LoginSectionComponent implements OnInit {
  public currentLogin: string;
  public currentPassword: string;

  constructor(private authService: AuthService) {}

  public ngOnInit(): void {
    let isAuthen = this.authService.isAuth();
  }
  public logIn(): void {
    let cred = {login: this.currentLogin, password: this.currentPassword}
    this.authService.logIn(cred);
    console.log(cred);
  }
}
