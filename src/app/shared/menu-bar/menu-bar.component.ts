import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';
import { debounceTime, map, Subject } from 'rxjs';
import { apiServices } from '../../services/api/api.service';
import { AlertsAndSugestionsService } from '../../services/alertsAndSuggestions/alerts-and-sugestions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
  categories: string[] = []; //contiene la lista de categorias para mostrarlas en menu
  categorySelect = false; // si esta true las categorias son visibles
  suggestion = false; // si esta true las sugerencias son visibles
  suggestionProducts: Product[] = []; // contiene todos los productos sugeridos (3)
  cartQuantity: number = 0; // muestra el numero de productos en carrito
  @ViewChild('search') search!: ElementRef<HTMLInputElement>; //referencia a input de busqueda

  suggestionEvent = new Subject<any>(); //disparador de sugerencias

  constructor(
    private apiServices: apiServices,
    private alertsAndSuggestionServices: AlertsAndSugestionsService,
    private router: Router
  ) {
    this.suggestionEvent.pipe(debounceTime(300)).subscribe(() => {
      this.searchSuggestion();
    });
  }

  ngOnInit(): void {
    this.apiServices.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.alertsAndSuggestionServices.getCartQuantity().subscribe((cuantity) => {
      this.cartQuantity = cuantity;
    });
  }

  switch() {
    this.categorySelect = !this.categorySelect;
  }

  searchSuggestion() {
    this.apiServices
      .getAllProducts()
      .pipe(
        map((prod: Product[]) => {
          const filter = prod.filter((prod) =>
            prod.title.includes(this.search.nativeElement.value)
          );
          return filter.slice(0, 3);
        })
      )
      .subscribe((products) => {
        this.suggestionProducts = products;
        this.search.nativeElement.value == ''
          ? (this.suggestion = false)
          : (this.suggestion = true);
      });
  }

  searchData() {
    this.alertsAndSuggestionServices.setSearch(this.search.nativeElement.value);
    this.router.navigate(['']);
  }

  suggestions() {
    this.suggestionEvent.next(null);
  }
}
