import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StateProccessService } from './state-proccess.service';

@Injectable({
  providedIn: 'root'
})
export class DataInterceptorInterceptor implements HttpInterceptor {

  constructor(private stateService : StateProccessService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(this.stateService.getToken()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.stateService.getToken()}`,
        }
      })
    }
    return next.handle(req)
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
