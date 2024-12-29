import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CheckoutService } from '../services/checkout.service';
import { CartService } from '../services/cart.service';
import {catchError, map, Observable, of} from 'rxjs';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent implements OnInit {
  firstName: string = '';
  phoneNumber: string = '';
  totalAmount: number = 0;

  constructor(
    private router: Router,
    private checkoutService: CheckoutService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,

  ) {}

  ngOnInit(): void {
     this.loadCartTotal();
    // Retrieve the totalAmount from query params
    this.activatedRoute.queryParams.subscribe((params) => {
      this.totalAmount = parseFloat(params['totalAmount']) || 0;
    });


  

  loadCartTotal(): Observable<number> {
    return this.cartService.getCartItems().pipe(
      map((cartItems: any[]) =>
        cartItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
      ),
      catchError((error) => {
        console.error('Error fetching cart items:', error);
        return of(0); // Return 0 if there is an error
      })
    );
  }


  // Place the order
placeOrder(): void {
    if (!this.firstName || !this.phoneNumber) {
      alert('Please fill in all required fields.');
      return;
    }



  if (this.totalAmount <= 0 || isNaN(this.totalAmount)) {
  //  alert('Your cart is empty. Add items to the cart before placing an order.');
    alert(this.totalAmount);
    return;
  }

    this.checkoutService
      .placeOrder(this.firstName, this.phoneNumber, this.totalAmount)
      .subscribe(
        (response) => {
          console.log('Order placed successfully:', response);
          alert('Order placed successfully!');
          this.router.navigate(['/thank-you']); // Redirect to thank-you page
        },
        (error) => {
          console.error('Error placing order:', error);
          alert('An error occurred during checkout.');
        }
      );
  }
}



