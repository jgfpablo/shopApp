import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private httpClient: HttpClient) {}

  // https://fakestoreapi.com/products?limit=5
  private apiUrl: string = 'https://fakestoreapi.com/products';
  limit = 5;

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`https://fakestoreapi.com/products`);
  }

  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(
      `https://fakestoreapi.com/products/${id}`
    );
  }

  getAllCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }

  getAllByCategories(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }

  getProductsByCategories(category: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }
}
