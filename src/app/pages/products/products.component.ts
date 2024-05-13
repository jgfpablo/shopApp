import { Component, SimpleChanges } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../interfaces/products.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(
    private shopService: ShopService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  products: Product[] = [];
  cartStore: Product[] = [];
  tipeData: string = '';

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.tipeData = params['cat'];
      this.getDataProducts();
    });
  }

  getDataProducts() {
    if (!this.tipeData) {
      this.shopService.getAllProducts().subscribe((resp) => {
        this.products = resp;
      });
    } else {
      this.shopService
        .getProductsByCategories(this.tipeData)
        .subscribe((resp) => {
          this.products = resp;
        });
    }
  }

  addToCart(item: Product) {
    this.cartStore = JSON.parse(localStorage.getItem('cart')!) || [];

    if (this.cartStore.length > 0) {
      let found = false;
      for (let index = 0; index < this.cartStore.length; index++) {
        if (this.cartStore[index].id == item.id) {
          this.cartStore[index].amount += 1;
          found = true;
        }
      }
      if (found == false) {
        item.amount = 1;
        this.cartStore.push(item);
      }
    } else {
      item.amount = 1;
      this.cartStore.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(this.cartStore));
  }
}
