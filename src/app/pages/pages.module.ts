import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { ViewDetailsProductComponent } from './view-details-product/view-details-product.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductsComponent,
    ViewDetailsProductComponent,
    ViewCartComponent,
  ],
  imports: [CommonModule, HttpClientModule, ComponentsModule, RouterModule],
  exports: [ProductsComponent, ViewDetailsProductComponent],
})
export class PagesModule {}
