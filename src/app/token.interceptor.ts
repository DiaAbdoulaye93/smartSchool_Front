
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../app/services/authentification.service';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authService = this.injector.get(AuthentificationService);
    const tokenizedReq = request.clone({
        setHeaders : {
            Authorization: `Bearer ${authService.getToken()}`
        }
    });
    return next.handle(request);
  }
}
