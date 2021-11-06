import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError((error:any) => {
        let errorMsg : string = 'خطایی رخ داده است!'

        if(error.error.message == 'The given data was invalid.') {
          errorMsg = 'فرمت شماره تلفن معتبر نیست!'
        }
        
        return throwError(errorMsg)
      })
    );
  }
}
