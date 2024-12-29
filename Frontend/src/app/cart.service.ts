import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartItems: any[] = [];

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  getCartItems() {
    return this.cartItems;
  }

  // Remove an item from the cart
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1); // Remove the item at the specified index
  }

  clearCart() {
    this.cartItems = [];
  }
}
