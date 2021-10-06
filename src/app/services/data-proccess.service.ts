import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlashSalesRootObject } from '../models/flash-sales.model';

@Injectable({
  providedIn: 'root'
})
export class DataProccessService {

  constructor(private http : HttpClient) { }

  getData() : Observable<FlashSalesRootObject> {
    return this.http.get<FlashSalesRootObject>('https://mobapi.banimode.com/api/v1/products/suggestion?platform=desktop')
  }
}
