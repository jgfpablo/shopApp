import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/products.interfaces';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.scss',
})
export class DetailsProductComponent {
  @Input() product: Product | null = null;
}
