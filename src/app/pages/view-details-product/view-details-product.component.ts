import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/products.interfaces';
import { ShopService } from '../../services/shop.service';
import { apiServices } from '../../services/api/api.service';

@Component({
  selector: 'app-view-details-product',
  templateUrl: './view-details-product.component.html',
  styleUrl: './view-details-product.component.scss',
})
export class ViewDetailsProductComponent {
  constructor(
    private apiService: apiServices,
    private ActivatedRoute: ActivatedRoute,
    private shopServices: ShopService
  ) {}

  product: Product | null = null;
  id: string | null = null;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.apiService.getProductById(this.id!).subscribe((data) => {
      this.product = data;
    });
  }

  addProduct(product: Product) {
    console.log(product);
  }
}
