import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-page',
  templateUrl: './league-page.component.html',
  styleUrls: ['./league-page.component.css']
})
export class LeaguePageComponent implements OnInit {
  public order: Order = {
    UserId: 0,
    Username: "",
    CurrentRank: "",
    CurrentRankLevel: "",
    CurrentRankPoints: "",
    OrderedRank: "",
    OrderedRankLevel: "",
    SelectedRegion: "",
    FirstName: "",
    LastName: "",
    Email: "",
    GameName: "League of Legends",
    Status: "Processing",
  };
  public ranks: Rank[] = [
    { name: "Iron", image: "https://boostroyal.no/assets/images/divisions/lol/iron.png" },
    { name: "Bronze", image: "https://boostroyal.no/assets/images/divisions/lol/bronze.png" },
    { name: "Silver", image: "https://boostroyal.no/assets/images/divisions/lol/silver.png" },
    { name: "Gold", image: "https://boostroyal.no/assets/images/divisions/lol/gold.png" },
    { name: "Platinum", image: "https://boostroyal.no/assets/images/divisions/lol/platinum.png" },
    { name: "Diamond", image: "https://boostroyal.no/assets/images/divisions/lol/diamond.png" },
    { name: "Master", image: "https://boostroyal.no/assets/images/divisions/lol/master.png" },
    { name: "Grandmaster", image: "https://boostroyal.no/assets/images/divisions/lol/grandmaster.png" }
  ];
  public isUserLoggedIn: boolean | undefined;
  public isOrderCorrect: boolean | undefined;
  public wrongData: boolean = false;
  public loggedInUser: User = {
    Email: "",
    FirstName: "",
    LastName: "",
    UserId: 0,
    Username: null
  }


  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    if (sessionStorage.getItem("jwt")) {
      this.isUserLoggedIn = true
      this.getUserDetails()
      this.order.FirstName = this.loggedInUser.FirstName
      this.order.LastName = this.loggedInUser.LastName
      this.order.Email = this.loggedInUser.Email
      this.order.UserId = this.loggedInUser.UserId
      this.order.Username = this.loggedInUser.Username
    }
  }

  getUserDetails() {
    this.loggedInUser.FirstName = sessionStorage.getItem("first_name")
    this.loggedInUser.LastName = sessionStorage.getItem("last_name")
    this.loggedInUser.Email = sessionStorage.getItem("email")
    this.loggedInUser.UserId = parseInt(sessionStorage.getItem("user_id") as string)
    this.loggedInUser.Username = sessionStorage.getItem("username")
  }

  submitDetails(ngForm: any) {
    let user = ngForm.form.controls
    this.order.FirstName = user.FirstName.value
    this.order.LastName = user.LastName.value
    this.order.Email = user.Email.value
    console.log(this.order)
  }

  saveCurrentRank(CurrentRank: any) {
    this.order.CurrentRank = CurrentRank
    console.log(this.order)
  }

  saveCurrentRankLevel(event:any) {
    
    this.order.CurrentRankLevel = event.currentTarget.value
    console.log(this.order)
  }

  saveCurrentLp(event: any) {
    this.order.CurrentRankPoints = event.currentTarget.value
    console.log(this.order)
  }

  saveDesiredRank(OrderedRank: any) {
    this.order.OrderedRank = OrderedRank
    console.log(this.order)
  }

  saveDesiredRankLevel(event: any) {
    this.order.OrderedRankLevel = event.currentTarget.value
    console.log(this.order)
  }

  saveRegion(event: any) {
    this.order.SelectedRegion = event.currentTarget.value
    console.log(this.order)
  }

  saveFirstName(event: any) {
    this.order.FirstName = event.currentTarget.value
    console.log(this.order)
  }

  saveLastName(event: any) {
    this.order.LastName = event.currentTarget.value
    console.log(this.order)
  }

  saveEmail(event: any) {
    this.order.Email = event.currentTarget.value
    console.log(this.order)
  }

  sendOrder() {
    if (this.verifyOrder()) {
      this.isOrderCorrect = true
      this.wrongData = false
      let payload = this.order
      const headers = { 'Content-Type': 'application/json' }
      const body = JSON.stringify(payload)
      this.http.post("https://localhost:7196/Email/sendEmail", body, { 'headers': headers }).subscribe(r => { console.log(r) })
    } else {
      this.wrongData = true
    }
  }

  verifyOrder() {
    if (this.order.CurrentRank && this.order.CurrentRankLevel && this.order.CurrentRankPoints && this.order.SelectedRegion &&
      this.order.OrderedRank && this.order.OrderedRankLevel &&
      this.order.Email && this.order.FirstName && this.order.LastName
    ) {
      return true
    }
    return false
  }
}

interface Rank {
  name: string;
  image: string
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
  FirstName: string | null;
  LastName: string | null;
  Email: string | null;
  GameName: string | null;
  Status: string | null
}

interface User {
  FirstName: string | null;
  LastName: string | null;
  Email: string | null;
  UserId: number
  Username: string | null;
}
