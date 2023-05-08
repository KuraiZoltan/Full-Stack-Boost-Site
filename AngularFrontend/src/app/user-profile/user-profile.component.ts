import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  public orders: Order[] = [];
  public loggedInUser: User = {
    Email: "",
    DiscordName: "",
    UserId: 0,
    Username: null,
    Role: null
  }
  public adminUser: boolean | undefined

  constructor(private http: HttpClient) {
    this.getUserDetails()
    this.isAdminUser()
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
      this.http.get<Order[]>(`https://localhost:7196/Order/getOrders/${this.loggedInUser.UserId}`, { 'headers': headers, withCredentials: true }).subscribe(result => {
        var ordersObject = result;
        for (let i = 0; i < ordersObject.length; i++) {
          this.orders.push(ordersObject[i])
        }
      }, error => console.error(error));
    }
    
  }

  getUserDetails() {
    this.loggedInUser.DiscordName = sessionStorage.getItem("discord_name")
    this.loggedInUser.Email = sessionStorage.getItem("email")
    this.loggedInUser.UserId = parseInt(sessionStorage.getItem("user_id") as string)
    this.loggedInUser.Username = sessionStorage.getItem("username")
    this.loggedInUser.Role = sessionStorage.getItem("role")
  }

  isAdminUser() {
    if (this.loggedInUser.Role === "Admin") {
      this.adminUser = true
    } else {
      this.adminUser = false
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
  username: string;
  email: string;
  selectedRegion: string;
  status: string;
}

interface User {
  DiscordName: string | null;
  Email: string | null;
  UserId: number
  Username: string | null;
  Role: string | null
}
