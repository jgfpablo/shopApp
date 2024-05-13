import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterLink } from '@angular/router';
import { RatingPipe } from './pipe/rating.pipe';
import { CartTableComponent } from './cart-table/cart-table.component';
import { DetailsProductComponent } from './details-product/details-product.component';

@NgModule({
  declarations: [
    CardComponent,
    RatingPipe,
    CartTableComponent,
    DetailsProductComponent,
  ],
  imports: [CommonModule, RouterLink],
  exports: [CardComponent, CartTableComponent, DetailsProductComponent],
})
export class ComponentsModule {}
