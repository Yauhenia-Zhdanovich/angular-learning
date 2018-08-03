import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from './authenticity.service';
import { ROUTES_CONFIG } from '../../../../app-config/routes/routes.config';

@Injectable()
export class AuthGuardService implements CanActivate {
  private authService: AuthService;
  private router: Router;

  constructor(
    authService: AuthService,
    router: Router
  ) {
    this.router = router;
    this.authService = authService;
  }

  public canActivate(): boolean {
    if (!this.authService.isAuth()) {
      this.router.navigate([ROUTES_CONFIG.loginAbsolutePath]);
    }
    return this.authService.isAuth();
  }
}
