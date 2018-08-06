import { Component } from '@angular/core';

import { AuthService } from '../../core/services/authenticity.service';
import { ROUTES_CONFIG } from '../../../../app-config/routes/routes.config';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  inputs: ['state:passedState'],
  providers: [ AuthService ]
})
export class HeaderComponent {
  public routesConfig = ROUTES_CONFIG;
  public isAuthorized: boolean;
  public authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }
}
