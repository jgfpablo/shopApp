import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../interfaces/products.interfaces';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/searchService/search.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(
    private shopService: ShopService,
    private ActivatedRoute: ActivatedRoute,
    private searchService: SearchService
  ) {}

  products: Product[] = [];
  cartStore: Product[] = [];
  tipeData: string = '';

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.tipeData = params['cat'];
      this.getDataProducts();
    });

    this.searchService.getSearch().subscribe((resp) => {
      if (resp) {
        this.searchData(resp.replace(/\b\w/g, (c) => c.toUpperCase()));
      } else {
        this.getDataProducts();
      }
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

  searchData(search: string) {
    this.shopService
      .getAllProducts()
      .pipe(
        map((prod: Product[]) => {
          const filter = prod.filter((prod) => prod.title.includes(search));
          return filter.slice(0, 3);
        })
      )
      .subscribe((product) => {
        this.products = product;
      });
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
