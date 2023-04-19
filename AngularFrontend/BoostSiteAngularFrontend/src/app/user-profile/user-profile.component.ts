import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  public orders: Order[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Order[]>("https://localhost:7196/Order/getAllOrders").subscribe(result => {
      var ordersObject = result;
      for (let i = 0; i < ordersObject.length; i++) {
        this.orders.push(ordersObject[i])
      }
    }, error => console.error(error));
  }
}

interface Order {
  id: number;
  currentRank: string;
  currentRankLevel: string;
  currentRankPoints: string;
  orderedRank: string;
  orderedRankLevel: string;
  gameName: string;
  firstName: string;
  lastName: string;
  email: string;
  selectedRegion: string;
  status: string;
}
