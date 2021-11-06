import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlashSalesRootObject } from '../models/flash-sales.model';
import { SuggestionsRootObject } from '../models/suggestions.model';
import { BrandsRootObject } from '../models/brands.model';
import { HomeBanimagRootObject } from '../models/homeBanimag.model';
import { environment } from 'src/environments/environment';
import { IPhoneNumber, PhoneResponseRootObject } from '../models/phoneNumber.model';

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

  getBrands() : Observable<BrandsRootObject> {
    return this.http.get<BrandsRootObject>(`${baseURL}/v1/home-brands`)
  }

  getHomeBanimag() : Observable<HomeBanimagRootObject> {
    return this.http.get<HomeBanimagRootObject>(`${baseURL}/v1/blog-post`)
  }

  sendPhoneNumber(phone: IPhoneNumber) : Observable<IPhoneNumber> {
    return this.http.post<IPhoneNumber>(`${baseURL}/v2/auth/request`, phone)
  }
}
