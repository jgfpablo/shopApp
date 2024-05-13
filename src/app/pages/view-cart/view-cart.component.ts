import { Component } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.scss',
})
export class ViewCartComponent {
  cart: Product[] = [];
  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    console.log(this.cart);
  }

  ngOnChanges(): void {
    console.log('hola');
  }

  deleteProductToCart(id: number) {
    this.cart.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}