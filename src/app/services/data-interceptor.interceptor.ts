import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request)
    .pipe(
      catchError((error:any) => {
        let errorMsg : string = 'خطایی رخ داده است!'

        switch (error.error.message) {
          case 'The given data was invalid.' : errorMsg = 'فرمت شماره تلفن معتبر نیست!';
          break;
        }
        
        return throwError(errorMsg)
      })
    );
  }
}
