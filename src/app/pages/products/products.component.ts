import { Component } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';
import { ActivatedRoute } from '@angular/router';
import { apiServices } from '../../services/api/api.service';
import { AlertsAndSugestionsService } from '../../services/alertsAndSuggestions/alerts-and-sugestions.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(
    private apiService: apiServices,
    private ActivatedRoute: ActivatedRoute,
    private alertsAndSuggestion: AlertsAndSugestionsService
  ) {}

  products: Product[] = [];
  cartStore: Product[] = [];
  tipeData: string = '';
  searchedProduct: string = '';

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.tipeData = params['cat'];
      this.searchedProduct = params['product'];
      this.getDataProducts();
    });

    this.cartStore = JSON.parse(localStorage.getItem('cart')!);

    this.alertsAndSuggestion.setCartQuantity(this.cartStore.length);
  }

  getDataProducts() {
    if (!this.tipeData && !this.searchedProduct) {
      this.getAllProducts();
    } else if (this.searchedProduct) {
      this.apiService
        .getAllProducts()
        .pipe(
          map((prod: Product[]) => {
            const filter = prod.filter((prod) =>
              prod.title.includes(this.searchedProduct)
            );
            return filter;
          })
        )
        .subscribe((product) => {
          this.products = product;
          console.log(product);
        });
    } else {
      this.getProductByCategory();
    }
  }

  getAllProducts() {
    this.apiService.getAllProducts().subscribe((resp) => {
      this.products = resp;
    });
  }

  getProductByCategory() {
    this.apiService.getProductsByCategories(this.tipeData).subscribe((resp) => {
      this.products = resp;
    });
  }

  // searchSuggestions(search: string) {
  //   this.apiService
  //     .getAllProducts()
  //     .pipe(
  //       map((prod: Product[]) => {
  //         const filter = prod.filter((prod) => prod.title.includes(search));
  //         return filter.slice(0, 3);
  //       })
  //     )
  //     .subscribe((product) => {
  //       this.products = product;
  //     });
  // }

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
    this.alertsAndSuggestion.setCartQuantity(this.cartStore.length);
  }
}
