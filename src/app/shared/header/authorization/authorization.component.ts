import {
  Component,
  OnInit,
  OnChanges
} from '@angular/core';
import { AuthService } from '../../../core/services/authenticity.service';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  // providers: [ AuthService ]
})
export class AuthorizationComponent implements OnInit {
  public authService: AuthService;
  public isAuthorized: boolean;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public ngOnInit(): void {
    this.authService.isAuthenticatedSubject.subscribe((cred): void => {
      console.log(cred, 'from auth component');
      if (cred.password) {
        this.isAuthorized = true;
        console.log(this.isAuthorized);
      }
    });
    this.isAuthorized = this.authService.isAuth();
  }

  public logOff(): void {
    this.authService.logOut();
    this.isAuthorized = this.authService.isAuth();
  }
}
