import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../interfaces/Order';

@Component({
  selector: 'app-valorant-confirm-order',
  templateUrl: './valorant-confirm-order.component.html',
  styleUrls: ['../valorant-services.component.css']
})
export class ValorantConfirmOrderComponent implements OnInit {
  @Input() order!: Order

  public isOrderCorrect: boolean | undefined;
  public wrongData: boolean | undefined;
  public isUserLoggedIn: boolean | undefined;
  public loggedInUser: User = {
    Email: "",
    DiscordName: "",
    UserId: 0,
    Username: null
  }

  ngOnInit() {
    if (sessionStorage.getItem("username")) {
      this.isUserLoggedIn = true
      this.getUserDetails()
      this.order.discordName = this.loggedInUser.DiscordName as string
      this.order.email = this.loggedInUser.Email as string
      this.order.userId = this.loggedInUser.UserId
      this.order.username = this.loggedInUser.Username as string
    }
  }

  getUserDetails() {
    this.loggedInUser.DiscordName = sessionStorage.getItem("discord_name")
    this.loggedInUser.Email = sessionStorage.getItem("email")
    this.loggedInUser.UserId = parseInt(sessionStorage.getItem("user_id") as string)
    this.loggedInUser.Username = sessionStorage.getItem("username")
  }

  submitDetails(ngForm: any) {
    let user = ngForm.form.controls
    this.order.discordName = user.DiscordName.value
    this.order.email = user.Email.value
    console.log(this.order)
  }

  constructor(private http: HttpClient) { }


  sendOrder() {
    if (this.verifyOrder()) {
      this.isOrderCorrect = true
      this.wrongData = false
      let payload = this.order
      const headers = {
        'Content-Type': 'application/json',
      }
      const body = JSON.stringify(payload)
      this.http.post("https://localhost:7196/Email/sendEmail", body, { 'headers': headers, withCredentials: true }).subscribe(r => { console.log(r) })
    } else {
      this.wrongData = true
    }
  }

  verifyOrder() {
    if (this.order.currentRank && this.order.currentRankLevel && this.order.currentRankPoints && this.order.selectedRegion &&
      this.order.orderedRank && this.order.orderedRankLevel &&
      this.order.email && this.order.discordName
    ) {
      return true
    }
    return false
  }
}

interface User {
  DiscordName: string | null;
  Email: string | null;
  UserId: number;
  Username: string | null;
}
