import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the structure of the order data
interface OrderData {
  firstname: string;
  phone_number: string;
  total_amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private checkoutUrl = 'http://localhost:3000/api/orders'; // Update with your backend endpoint

  constructor(private http: HttpClient) {}

// Method to send order details to the backend
  placeOrder(firstname: string, phoneNumber: string, totalAmount: number): Observable<any> {
    const orderData: OrderData = {
      firstname: firstname, // Explicitly assign firstname
      phone_number: phoneNumber, // Explicitly assign phone number
      total_amount: totalAmount, // Explicitly assign total amount
    };

    return this.http.post(this.checkoutUrl, orderData);
  }

  // Method to send order details to the backend
 /* placeOrder(firstname: string, phoneNumber: string, totalAmount: number): Observable<any> {
    const orderData = { firstname, phone_number: phoneNumber, total_amount: totalAmount };
    return this.http.post(this.checkoutUrl, orderData);
  } */
}
