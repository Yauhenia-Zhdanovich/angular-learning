import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/authenticity.service';
import { Credentials } from '../../shared/interfaces/credentials';
import { Subscription } from 'rxjs';

@Component({
  selector: 'login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.css'],
})
export class LoginSectionComponent implements OnInit, OnDestroy {
  private formBuilder: FormBuilder;
  private authServiceSub: Subscription;
  public authForm: FormGroup;
  public authService: AuthService;
  public didAuthFailed: boolean = false;

  constructor(
    authService: AuthService,
    formBuilder: FormBuilder
  ) {
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.createForm();
  }

  private createForm(): void {
    this.authForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public ngOnInit(): void {
    this.authServiceSub = this.authService.isAuthenticatedSubject
      .subscribe(data => {
        if (!data) {
          this.didAuthFailed = true;
        }
      });
  }

  public logIn(): void {
    const cred: Credentials = this.authForm.value;
    this.authService.logIn(cred);
  }

  public ngOnDestroy(): void {
    this.authServiceSub.unsubscribe();
  }
}
