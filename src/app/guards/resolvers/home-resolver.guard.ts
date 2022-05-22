import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin } from 'rxjs';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverGuard implements Resolve<{}> {
  constructor(private dataProccess: DataProccessService) {}
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): {} {
    return forkJoin({
      flashSales: this.dataProccess.getFlashSales(),
      suggestions: this.dataProccess.getSuggestions(),
      brands: this.dataProccess.getBrands(),
      banimag: this.dataProccess.getHomeBanimag()
    })
  }
  
}