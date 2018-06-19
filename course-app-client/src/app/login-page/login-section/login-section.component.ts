import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { AuthService } from '../../core/services/authenticity.service';
import { Credentials } from '../../shared/interfaces/credentials';
import { Subscription } from 'rxjs';

@Component({
  selector: 'login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css'],
})

export class LoginSectionComponent implements OnInit, OnDestroy {
  private authServiceSub: Subscription;
  public currentLogin: string;
  public currentPassword: string;
  public authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public ngOnInit(): void {
    this.authServiceSub = this.authService.isAuthenticatedSubject.subscribe((cred) => console.log(cred, 'from login-section component'));
  }

  public logIn(): void {
    let cred: Credentials = {login: this.currentLogin, password: this.currentPassword};
    this.authService.logIn(cred);
  }

  public ngOnDestroy(): void {
    this.authServiceSub.unsubscribe();
  }
}
