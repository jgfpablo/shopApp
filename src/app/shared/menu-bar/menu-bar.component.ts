import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../interfaces/products.interfaces';
import { filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
  categories: string[] = [];
  select = false;
  allProducts: Product[] = [];
  @ViewChild('search') search!: ElementRef<HTMLInputElement>;

  constructor(private shopServices: ShopService) {}

  ngOnInit(): void {
    this.shopServices.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  switch() {
    this.select = !this.select;
  }

  searchData() {
    this.shopServices
      .getAllProducts()
      .pipe(
        map((prod: Product[]) => {
          const filter = prod.filter((prod) =>
            prod.title.includes(this.search.nativeElement.value)
          );
          return filter.slice(0, 3);
        })
      )
      .subscribe((product) => {
        this.allProducts = product;
        console.log(this.allProducts);
      });
    // console.log(this.search.nativeElement.value);
  }
}
