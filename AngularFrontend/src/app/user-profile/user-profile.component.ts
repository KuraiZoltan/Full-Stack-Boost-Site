import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  public orders: Order[] = [];
  public loggedInUser: User = {
    Email: "",
    FirstName: "",
    LastName: "",
    UserId: 0,
    Username: null
  }
  public adminUser: boolean | undefined

  constructor(private http: HttpClient) {
    if (this.adminUser) {
      const headers = { 'Content-Type': 'application/json' }
      this.http.get<Order[]>(`https://localhost:7196/Order/getAllOrders`, { 'headers': headers, withCredentials: true }).subscribe(result => {
        var ordersObject = result;
        for (let i = 0; i < ordersObject.length; i++) {
          this.orders.push(ordersObject[i])
        }
      }, error => console.error(error));
    } else {
      const headers = { 'Content-Type': 'application/json' }
      this.http.get<Order[]>(`https://localhost:7196/Order/getOrders/${sessionStorage.getItem("user_id")}`, { 'headers': headers, withCredentials: true }).subscribe(result => {
        var ordersObject = result;
        for (let i = 0; i < ordersObject.length; i++) {
          this.orders.push(ordersObject[i])
        }
      }, error => console.error(error));
    }
  }

  saveStatus(event: any, orderId: any) {
    console.log(event.currentTarget.value, orderId)
    let payload = {
      Status: event.currentTarget.value,
      OrderId: orderId
    }
    const headers = {
      'Content-Type': 'application/json',
    }
    this.http.put('https://localhost:7196/Order/changeStatus', payload, { 'headers': headers, withCredentials: true }).subscribe(response => {
      console.log(response)
    })
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

interface User {
  FirstName: string | null;
  LastName: string | null;
  Email: string | null;
  UserId: number
  Username: string | null;
}
