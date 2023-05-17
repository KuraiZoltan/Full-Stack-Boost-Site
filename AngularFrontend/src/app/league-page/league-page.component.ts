import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-page',
  templateUrl: './league-page.component.html',
  styleUrls: ['./league-page.component.css']
})
export class LeaguePageComponent implements OnInit {
  public lpRangeOptions = ["0-20", "21-40", "41-60", "61-80", "81-100"]
  public order: Order = {
    UserId: 0,
    Username: "",
    CurrentRank: "",
    CurrentRankLevel: "",
    CurrentRankPoints: "",
    OrderedRank: "",
    OrderedRankLevel: "",
    SelectedRegion: "",
    DiscordName: "",
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
  ];
  public rankOptions: string[] = ['Solo/Duo', 'Flex']

  public rankLevels: string[] = ['I', 'II', 'III', 'IV']
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

  saveCurrentRank(CurrentRank: any) {
    this.order.CurrentRank = CurrentRank
    console.log(this.order)
  }

  saveCurrentRankLevel(level: any) {
    this.order.CurrentRankLevel = level
    console.log(this.order)
  }

  saveLpRange(event: any) {
    if (event.currentTarget.value === 0) {
      alert("Please select a valid option!")
    } else {
      this.order.CurrentRankPoints = event.currentTarget.value
    }
  }

  saveDesiredRank(OrderedRank: any) {
    this.order.OrderedRank = OrderedRank
    console.log(this.order)
  }

  saveDesiredRankLevel(level: any) {
    this.order.OrderedRankLevel = level
    console.log(event)
  }

  saveRegion(event: any) {
    this.order.SelectedRegion = event.currentTarget.value
    console.log(this.order)
  }

  saveEmail(event: any) {
    this.order.Email = event.currentTarget.value
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
      const headers = { 'Content-Type': 'application/json'}
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
  DiscordName: string | null;
  Email: string | null;
  GameName: string | null;
  Status: string | null
}

interface User {
  DiscordName: string | null;
  Email: string | null;
  UserId: number
  Username: string | null;
}
