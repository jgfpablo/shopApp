import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrl: './cart-table.component.scss',
})
export class CartTableComponent {
  @Input() cart: Product[] = [];
  @Output() emitDeleteProduct = new EventEmitter();

  deleteProduct(id: number) {
    this.emitDeleteProduct.emit(id);
  }

  cuantity(data: string) {
    console.log('debo ' + data);

    //deberia emitir el dato para que view cart lo cosas
  }
}
