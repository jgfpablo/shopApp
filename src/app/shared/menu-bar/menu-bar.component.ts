import { Component } from '@angular/core';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
  categories: string[] = [];
  select = false;

  constructor(private shopServices: ShopService) {}

  ngOnInit(): void {
    this.shopServices.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  switch() {
    this.select = !this.select;
  }
}
