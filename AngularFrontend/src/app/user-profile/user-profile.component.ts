import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/User'
import { Order } from '../interfaces/Order'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public orders: Order[] = [];
  public loggedInUser: User = {
    Email: "",
    DiscordName: "",
    UserId: 0,
    Username: null,
    Role: null
  }
  
  public adminUser: boolean | undefined

  constructor() { }

  ngOnInit() {
    this.getUserDetails()
    this.isAdminUser()
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
}


