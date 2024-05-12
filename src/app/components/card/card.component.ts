import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item: Product | undefined;
  @Output() addToCartEmit = new EventEmitter();

  addToCart() {
    this.addToCartEmit.emit(this.item);
  }
}
