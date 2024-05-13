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

  ngOnChanges(): void {}

  deleteProductToCart(id: number) {
    this.cart.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addSubstractProduct(operator: any[]) {
    if (operator[0] == '+') {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id === operator[1]) {
          this.cart[index].cuantity++;
          localStorage.setItem('cart', JSON.stringify(this.cart));
        }
      }
    } else {
      for (let index = 0; index < this.cart.length; index++) {
        if (this.cart[index].id === operator[1]) {
          if (this.cart[index].cuantity > 0) {
            this.cart[index].cuantity--;
            localStorage.setItem('cart', JSON.stringify(this.cart));
          }
        }
      }
    }
  }
}
