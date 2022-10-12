import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

/** 拦截器，拦截所有http请求 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      const authReq = request.clone({
        headers: request.headers.set('token', token),
      });
      return next.handle(authReq);
    } else {
      return next.handle(request);
    }
  }
}

