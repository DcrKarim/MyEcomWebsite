import {Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {ProductService} from '../services/product.service';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  totalAmount: number = 0; // Variable to store total amount

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private imageService: ImageService
  ) {}
  ngOnInit(): void {
    this.loadCartItems();
  }

  // Fetch cart items from the backend
  /* loadCartItems(): void {
    this.cartService.getCartItems().subscribe(
      (data) => {
        this.cartItems = data;
        console.log('Cart Items:', this.cartItems); // Log cart items to check
        this.calculateTotal(); // Calculate total
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  } */

// Fetch cart items and enrich them with product details and images
  loadCartItems(): void {
    this.cartService.getCartItems().subscribe(
      (cartData) => {
        this.cartItems = []; // Reset the cartItems array
        const fetchProductDetails = cartData.map((cartItem: any) =>
          this.productService.getProductById(cartItem.product_id).subscribe(
            (product) => {
              this.cartItems.push({
                ...cartItem,
                ...product, // Merge cart item with product details
                image: this.imageService.getImagePath(cartItem.product_id), // Add image path using ImageService
              });
              this.calculateTotal(); // Recalculate total after each product fetch
            },
            (error) => console.error('Error fetching product details:', error)
          )
        );
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }


  // Method to calculate the total
  calculateTotal(): void {
  //  this.totalAmount = this.cartItems.reduce(
 //     (sum, item) => sum + item.price * item.quantity, 0);
    this.totalAmount = parseFloat(
      this.cartItems
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2) // Limit to two decimal places
    );
  }

  // Method to remove item from the cart
  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId).subscribe(
      () => {
        console.log('Item removed from cart');
        this.loadCartItems(); // Reload cart items after removal
      },
      (error) => {
        console.error('Error removing item from cart:', error);
      }
    );
  }

  /*cartItems: any[] = [];
  totalAmount: number = 0; // Variable to store total amount

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    console.log('Cart Items:', this.cartItems); // Log cart items to check
    this.calculateTotal(); // Calculate total
  }

  // Method to calculate the total
  calculateTotal() {
    this.totalAmount = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  // Method to remove item from the cart
  removeItem(index: number) {
    this.cartService.removeFromCart(index); // Call the remove method in the service
    this.cartItems = this.cartService.getCartItems(); // Update the local cartItems array
    this.calculateTotal(); // Recalculate the total amount
  } */
}
