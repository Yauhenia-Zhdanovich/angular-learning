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
  public state: string;
  public isAuthorized: boolean;
  constructor(private authService: AuthService) {}
   public ngOnInit(): void {
     this.isAuthorized = this.authService.isAuth();
     console.log(this.state);
  }
}