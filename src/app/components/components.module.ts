import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterLink } from '@angular/router';
import { RatingPipe } from './pipe/rating.pipe';
import { CartTableComponent } from './cart-table/cart-table.component';

@NgModule({
  declarations: [
    CardComponent,
    ProductDetailsComponent,
    RatingPipe,
    CartTableComponent,
  ],
  imports: [CommonModule, RouterLink],
  exports: [CardComponent, CartTableComponent],
})
export class ComponentsModule {}
