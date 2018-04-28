import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/authenticity.service';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [ AuthService ]
})
export class AuthorizationComponent {
  public authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public logOff(): void {
    this.authService.logOut();
  }
}
