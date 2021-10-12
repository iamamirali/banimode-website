import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlashSalesRootObject } from '../models/flash-sales.model';
import { environment } from 'src/environments/environment';

const baseURL:string = environment.baseURL
@Injectable({
  providedIn: 'root'
})
export class DataProccessService {

  constructor(private http : HttpClient) { }

  
  getFlashSales() : Observable<FlashSalesRootObject> {
    let params = new HttpParams().set('platform','desktop');
    const data = this.http.get<FlashSalesRootObject>(`${baseURL}/v1/products/flash-sales`, {params})
    console.log(data);
    return data
  }
}
