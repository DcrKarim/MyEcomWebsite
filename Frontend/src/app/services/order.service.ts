import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) {}

  placeOrder(firstname: string, phone_number: string, total_amount: number): Observable<any> {
    return this.http.post(this.orderUrl, { firstname, phone_number, total_amount });
  }

}
