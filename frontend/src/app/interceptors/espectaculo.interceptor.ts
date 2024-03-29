import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';

const AUTHORIZATION = "Authorization";
const BEARER = "Bearer";

@Injectable()
export class EspectaculoInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   
    let intReq = request;
    const token = this.tokenService.getToken();
    if(token!==null){
      intReq = request.clone({headers:request.headers.set('Authorization','Bearer'+token)});
    }
    return next.handle(intReq);
  
  }

 
}

export const interceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass: EspectaculoInterceptor, multi: true }]