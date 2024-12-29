import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl = 'http://localhost:3000/api/cart';

  constructor(private http: HttpClient) {}

  // Add to cart method
  addToCart(product: any): Observable<any> {
    const cartItem = { product_id: product.id, quantity: 1 };
    console.log('Sending product to cart:', cartItem); // Debugging log
    return this.http.post(this.cartUrl, cartItem);
  }

  /*
  addToCart(productId: number, quantity: number): Observable<any> {
    return this.http.post(this.cartUrl, { product_id: productId, quantity });
  } */

  /*
  getCartItems(): Observable<any> {
    return this.http.get(this.cartUrl);
  } */

  // Fetch all cart items
  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(this.cartUrl);
  }

  // Remove item from the cart
  removeFromCart(productId: number): Observable<any> {
    return this.http.delete(`${this.cartUrl}/${productId}`);
  }

  // Fetch total amount from the backend
  getTotalAmount(): Observable<{ totalAmount: number }> {
    return this.http.get<{ totalAmount: number }>(`${this.cartUrl}/total`);
  }

}
