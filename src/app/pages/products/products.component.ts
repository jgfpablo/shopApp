import { Component } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { apiServices } from '../../services/api/api.service';
import { AlertsAndSugestionsService } from '../../services/alertsAndSuggestions/alerts-and-sugestions.service';

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

  ngOnInit(): void {
    let data = '';
    this.alertsAndSuggestion
      .getSearch()
      .subscribe((dataSearch) => (data = dataSearch));

    // cosas Cosas Cosas
    if (data) {
      this.searchData(data);
      console.log(data, 'entre al if debo tener data guardada');
    } else {
      console.log('no entre al if no tengo data');
      this.ActivatedRoute.params.subscribe((params) => {
        this.tipeData = params['cat'];
        this.getDataProducts();
      });
    }

    this.alertsAndSuggestion.getSearch().subscribe((resp) => {
      if (resp) {
        this.searchData(resp.replace(/\b\w/g, (c) => c.toUpperCase()));
      } else {
        this.getDataProducts();
      }
    });

    this.cartStore = JSON.parse(localStorage.getItem('cart')!);

    this.alertsAndSuggestion.setCartQuantity(this.cartStore.length);
  }

  getDataProducts() {
    if (!this.tipeData) {
      this.apiService.getAllProducts().subscribe((resp) => {
        this.products = resp;
      });
    } else {
      this.apiService
        .getProductsByCategories(this.tipeData)
        .subscribe((resp) => {
          this.products = resp;
        });
    }
  }

  searchData(search: string) {
    this.apiService
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
    this.alertsAndSuggestion.setCartQuantity(this.cartStore.length);
  }
}
