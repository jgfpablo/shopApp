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
  @Output() emitAddSubstractProduct = new EventEmitter();

  deleteProduct(id: number) {
    this.emitDeleteProduct.emit(id);
  }

  addSubstractProduct(operator: string, id: number) {
    let data = [operator, id];

    this.emitAddSubstractProduct.emit(data);

    //deberia emitir el dato para que view cart lo cosas
  }
}
