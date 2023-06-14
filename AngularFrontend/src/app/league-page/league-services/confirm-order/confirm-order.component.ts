import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../../interfaces/Order';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['../league-services.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  @Input() order!: Order;

  public isUserLoggedIn: boolean | undefined;
  public isOrderCorrect: boolean | undefined;
  public wrongData: boolean = false;
  public loggedInUser: User = {
      email: "",
      discordName: "",
      userId: 0,
      username: null,
      role: null
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    if (sessionStorage.getItem("username")) {
      this.isUserLoggedIn = true
      this.getUserDetails()
      this.order.discordName = this.loggedInUser.discordName as string
      this.order.email = this.loggedInUser.email as string
      this.order.userId = this.loggedInUser.userId
      this.order.username = this.loggedInUser.username as string
    }
  }

  getUserDetails() {
    this.loggedInUser.discordName = sessionStorage.getItem("discord_name")
    this.loggedInUser.email = sessionStorage.getItem("email")
    this.loggedInUser.userId = parseInt(sessionStorage.getItem("user_id") as string)
    this.loggedInUser.username = sessionStorage.getItem("username")
    this.loggedInUser.role = sessionStorage.getItem("role")
  }

  submitDetails(ngForm: any) {
    let user = ngForm.form.controls
    this.order.discordName = user.LastName.value
    this.order.email = user.Email.value
    console.log(this.order)
  }

  setRankedOption(event: any) {
    console.log(event)
  }

  sendOrder() {
    if (this.verifyOrder()) {
      this.isOrderCorrect = true
      this.wrongData = false
      let payload = this.order
      const headers = { 'Content-Type': 'application/json' }
      const body = JSON.stringify(payload)
      this.http.post("https://localhost:7196/Email/sendEmail", body, { 'headers': headers, withCredentials: true }).subscribe(r => { console.log(r) })
    } else {
      this.wrongData = true
    }
  }

  verifyOrder() {
    if (this.order.currentRank && this.order.currentRankLevel && this.order.currentRankPoints && this.order.selectedRegion &&
      this.order.orderedRank && this.order.orderedRankLevel &&
      this.order.email && this.order.discordName && this.order.rankedType
    ) {
      return true
    }
    return false
  }
}

