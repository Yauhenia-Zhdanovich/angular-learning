import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { AuthService } from '../services/authenticity.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  private auth: AuthService;

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  public intercept(req:  HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.auth.getToken() || 'undefined';
    const newRequest: HttpRequest<any> = req.clone({ setHeaders: { Authorization: token } });
    return next.handle(newRequest);
  }
}
