import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'products', loadChildren: () => import('./modules/product-page/product-page.module').then(m => m.ProductPageModule)},
  {path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  // {path: '**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
