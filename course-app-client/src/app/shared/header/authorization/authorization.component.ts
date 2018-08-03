import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../core/services/authenticity.service';
import { ROUTES_CONFIG } from '../../../../../app-config/routes/routes.config';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {
  private activatedRoute: ActivatedRoute;
  public routesConfig = ROUTES_CONFIG;
  public authService: AuthService;
  public isComponentWillBeShown: boolean;

  constructor(
    authService: AuthService,
    activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute = activatedRoute;
    this.authService = authService;
  }

  public ngOnInit(): void {
    this.isComponentWillBeShown = !(this.activatedRoute.routeConfig.path === ROUTES_CONFIG.login);
  }

  public logOff(): void {
    this.authService.logOut();
  }
}
