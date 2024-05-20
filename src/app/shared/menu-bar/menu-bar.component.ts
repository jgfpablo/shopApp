import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../interfaces/products.interfaces';
import { debounceTime, map, Subject } from 'rxjs';
import { SearchService } from '../../services/searchService/search.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
  categories: string[] = [];
  select = false;
  suggestion = false;
  allProducts: Product[] = [];
  @ViewChild('search') search!: ElementRef<HTMLInputElement>;

  eventHelp = new Subject<any>();

  constructor(
    private shopServices: ShopService,
    private searchService: SearchService
  ) {
    this.eventHelp.pipe(debounceTime(500)).subscribe(() => {
      // this.searchData();
      //esto es parte de las sugerencias
    });
  }

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
        this.searchService.setSearch(this.search.nativeElement.value);
      });
  }

  suggestions() {
    this.eventHelp.next(null);
  }
}
