import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/authenticity.service';

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  inputs: ['state:passedState'],
  providers: [ AuthService ]
})

export class HeaderComponent implements OnInit {
  public isAuthorized: boolean;
  public authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

   public ngOnInit(): void {
     this.isAuthorized = this.authService.isAuth();
  }
}
