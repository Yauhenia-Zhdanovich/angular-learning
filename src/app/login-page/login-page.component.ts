import { Component } from '@angular/core';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  public state: string = 'authorization';
}
