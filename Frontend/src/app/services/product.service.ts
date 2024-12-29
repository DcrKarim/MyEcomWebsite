import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  // Fetch all products
   getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

 /* getProducts(): Observable<any[]> {
    return of([
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
      { id: 4, name: 'Product 4', price: 400 },
    ]);
  } */

  // Fetch product details by ID
    getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  /*getProductById(id: string): Observable<any> {
    const mockProducts = [
      { id: '1', name: 'Product 1', price: 100 },
      { id: '2', name: 'Product 2', price: 200 },
      { id: '3', name: 'Product 3', price: 300 },
      { id: '4', name: 'Product 4', price: 400 },
    ];
    return of(mockProducts.find(product => product.id === id));
  } */
}
