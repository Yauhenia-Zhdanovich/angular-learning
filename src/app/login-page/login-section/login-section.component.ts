import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../core/services/authenticity.service";

@Component({
  selector: "login-section",
  templateUrl: "./login-section.component.html",
  styleUrls: ["./login-section.component.css"],
  providers: [AuthService]
})
export class LoginSectionComponent implements OnInit {
  public currentLogin: string;
  public currentPassword: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    let isAuthen = this.authService.isAuth();
    console.log(isAuthen);
  }

  public logName(): void {
    console.log(this.currentLogin, this.currentPassword);
  }
}
