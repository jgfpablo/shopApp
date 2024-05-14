import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../interfaces/products.interfaces';

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
    console.log(this.search.nativeElement.value);
    this.shopServices.getAllProducts().subscribe((product) => {
      this.allProducts = product;
    });
  }
}
