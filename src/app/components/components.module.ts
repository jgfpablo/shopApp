import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterLink } from '@angular/router';
import { RatingPipe } from './pipe/rating.pipe';

@NgModule({
  declarations: [CardComponent, ProductDetailsComponent, RatingPipe],
  imports: [CommonModule, RouterLink],
  exports: [CardComponent],
})
export class ComponentsModule {}
