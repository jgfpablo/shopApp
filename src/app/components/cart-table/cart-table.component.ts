import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.scss',
})
export class CartTableComponent {
  @Input() cart: Product[] = [];

  deleteProduct(id: number) {
    this.cart.splice(id, 1);
    //deberia emitir el dato para que view cart lo cosas
    console.log(this.cart);
  }

  cuantity(data: string) {
    console.log('debo ' + data);

    //deberia emitir el dato para que view cart lo cosas
  }
}
