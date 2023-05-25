import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

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
    Email: "",
    DiscordName: "",
    UserId: 0,
    Username: null
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    if (sessionStorage.getItem("username")) {
      this.isUserLoggedIn = true
      this.getUserDetails()
      this.order.DiscordName = this.loggedInUser.DiscordName
      this.order.Email = this.loggedInUser.Email
      this.order.UserId = this.loggedInUser.UserId
      this.order.Username = this.loggedInUser.Username
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
    this.order.DiscordName = user.LastName.value
    this.order.Email = user.Email.value
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
    if (this.order.CurrentRank && this.order.CurrentRankLevel && this.order.CurrentRankPoints && this.order.SelectedRegion &&
      this.order.OrderedRank && this.order.OrderedRankLevel &&
      this.order.Email && this.order.DiscordName
    ) {
      return true
    }
    return false
  }
}

interface Order {
  Username: string | null;
  UserId: number
  CurrentRank: string | null;
  CurrentRankLevel: string | null;
  CurrentRankPoints: string | null;
  OrderedRank: string | null;
  OrderedRankLevel: string | null;
  SelectedRegion: string | null;
  DiscordName: string | null;
  Email: string | null;
  GameName: string | null;
  Status: string | null
}

interface User {
  Email: string | null,
  DiscordName: string | null,
  UserId: number,
  Username: string | null
}
