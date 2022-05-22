import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SuggestionsRootObject } from 'src/app/models/suggestions.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsResolverGuard implements Resolve<SuggestionsRootObject> {
  constructor(private dataFetch: DataProccessService) {}
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<SuggestionsRootObject> {
    return this.dataFetch.getSuggestions();
  }
  
}
