import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { AuthService } from '../../../core/services/authenticity.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})

export class AuthorizationComponent implements OnInit, OnDestroy {
  private authServiceSub: Subscription;
  public authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  public ngOnInit(): void {
    this.authServiceSub = this.authService.isAuthenticatedSubject.subscribe((cred): void => {
      console.log(cred, 'from auth component');
    });
  }

  public ngOnDestroy(): void {
    this.authServiceSub.unsubscribe();
  }

  public logOff(): void {
    this.authService.logOut();
  }
}
