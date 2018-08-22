import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortifolioComponent } from './portifolio/portifolio.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: PortifolioComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
