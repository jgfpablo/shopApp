import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { map, tap } from 'rxjs';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(private shopService: ShopService) {}

  data: Product[] = [];

  cartStore: Product[] = [];

  ngOnInit(): void {
    this.shopService.getAllProducts().subscribe((resp) => {
      this.data = resp;
    });
  }

  addToCart(item: Product) {
    this.cartStore = JSON.parse(localStorage.getItem('cart')!) || [];
    this.cartStore.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cartStore));
  }
}
