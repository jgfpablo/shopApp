import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ViewDetailsProductComponent } from './pages/view-details-product/view-details-product.component';
import { ViewCartComponent } from './pages/view-cart/view-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    pathMatch: 'full',
  },
  {
    path: 'details/:id',
    component: ViewDetailsProductComponent,
  },
  {
    path: 'show-cart',
    component: ViewCartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
