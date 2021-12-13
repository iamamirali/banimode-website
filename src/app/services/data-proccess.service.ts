import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlashSalesRootObject } from '../models/flash-sales.model';
import { SuggestionsRootObject } from '../models/suggestions.model';
import { BrandsRootObject } from '../models/brands.model';
import { HomeBanimagRootObject } from '../models/homeBanimag.model';
import { environment } from 'src/environments/environment';
import { IPhoneNumber, IPhoneNumberOnce} from '../models/phoneNumber.model';
import { IVerifCode } from '../models/verifCode.model';
import { VerifResponseRootObject } from '../models/verifCode.model';
import { IPassword } from '../models/password.model';
import { IEmail } from '../models/email.model';

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

  sendPhoneNumber(phone: IPhoneNumber) : Observable<HttpResponse<any>> {
    return this.http.post<IPhoneNumber>(`${baseURL}/v2/auth/request`, phone, {observe: 'response'})
  }
  sendPhoneNumberOnce(phone: IPhoneNumberOnce) : Observable<HttpResponse<any>> {
    return this.http.post<IPhoneNumberOnce>(`${baseURL}/v2/auth/request`, phone, {observe: 'response'})
  }

  sendVerifCode(code: IVerifCode) : Observable<HttpResponse<any>> {
    return this.http.post<IVerifCode>(`${baseURL}/v2/auth`, code, { observe: 'response' })
  }
  getVerifResponse() : Observable<VerifResponseRootObject> {
    return this.http.get<VerifResponseRootObject>(`${baseURL}/v2/auth`)
  }

  sendPassword(password : IPassword) : Observable<IPassword> {
    return this.http.post<IPassword>(`${baseURL}/v2/profile/set-password`, password)
  }
  // sendEmail(email: FormData) : Observable<HttpResponse<any>> {
  //   return this.http.post('https://www.banimode.com/module/banitemplate/registerNewsletter', email, {observe: "response"})
  // }
}
