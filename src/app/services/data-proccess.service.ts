import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlashSalesRootObject } from '../models/flash-sales.model';
import { SuggestionsRootObject } from '../models/suggestions.model';
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
    return data
  }

  getSuggestions() : Observable<SuggestionsRootObject> {
    let params = new HttpParams().set('platform', 'desktop');
    return this.http.get<SuggestionsRootObject>(`${baseURL}/v1/products/suggestion`, {params})
  }
}
