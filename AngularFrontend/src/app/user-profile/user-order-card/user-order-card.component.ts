import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { UserProfileComponent } from '../user-profile.component';
import { Order } from '../../interfaces/Order';

@Component({
  selector: 'app-user-order-card',
  templateUrl: './user-order-card.component.html',
  styleUrls: ['./user-order-card.component.css']
})
export class UserOrderCardComponent {
  @Input() orders!: Order[]

  constructor(private http: HttpClient, userProfile: UserProfileComponent) {
    const headers = { 'Content-Type': 'application/json' }
    this.http.get<Order[]>(`https://localhost:7196/Order/getOrders/${userProfile.loggedInUser.userId}`, { 'headers': headers, withCredentials: true }).subscribe(result => {
      var ordersObject = result;
      for (let i = 0; i < ordersObject.length; i++) {
        this.orders.push(ordersObject[i])
      }
    }, error => console.error(error));
  }
}
