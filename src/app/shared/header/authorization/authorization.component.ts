import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/authenticity.service';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [ AuthService ]
})
export class AuthorizationComponent {
  // TODO change declarations of services
  constructor(private authService: AuthService) {}
  public logOff(): void {
    this.authService.logOut();
    console.log('user logged out');
  }
}
