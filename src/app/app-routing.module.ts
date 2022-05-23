import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  {path: 'products', loadChildren: () => import('./modules/product-page/product-page.module').then(m => m.ProductPageModule)},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
