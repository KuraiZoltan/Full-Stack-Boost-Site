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
    email: "",
    discordName: "",
    userId: 0,
    username: null,
    role: null
  }
  
  public adminUser: boolean | undefined

  constructor() { }

  ngOnInit() {
    this.getUserDetails()
    this.isAdminUser()
  }

  getUserDetails() {
    this.loggedInUser.discordName = sessionStorage.getItem("discord_name")
    this.loggedInUser.email = sessionStorage.getItem("email")
    this.loggedInUser.userId = parseInt(sessionStorage.getItem("user_id") as string)
    this.loggedInUser.username = sessionStorage.getItem("username")
    this.loggedInUser.role = sessionStorage.getItem("role")
  }

  isAdminUser() {
    if (this.loggedInUser.role === "Admin") {
      this.adminUser = true
    } else {
      this.adminUser = false
    }
  }
}


