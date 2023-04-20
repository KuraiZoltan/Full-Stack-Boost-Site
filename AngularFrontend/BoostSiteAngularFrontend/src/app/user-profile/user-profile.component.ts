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
    FirstName: "",
    LastName: "",
    UserId: 0,
    Username: null
  }
  public adminUser: boolean | undefined

  constructor(private http: HttpClient) {
    this.getUserDetails()
    this.http.get<Order[]>(`https://localhost:7196/Order/getOrders/${this.loggedInUser.UserId}`).subscribe(result => {
      var ordersObject = result;
      for (let i = 0; i < ordersObject.length; i++) {
        this.orders.push(ordersObject[i])
      }
    }, error => console.error(error));
  }

  getUserDetails() {
    this.loggedInUser.FirstName = sessionStorage.getItem("first_name")
    this.loggedInUser.LastName = sessionStorage.getItem("last_name")
    this.loggedInUser.Email = sessionStorage.getItem("email")
    this.loggedInUser.UserId = parseInt(sessionStorage.getItem("user_id") as string)
    this.loggedInUser.Username = sessionStorage.getItem("username")
    if (this.loggedInUser.Username === "Zolika1022" && this.loggedInUser.Email === "kz1022@gmail.com") {
      this.adminUser = true
    }
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
