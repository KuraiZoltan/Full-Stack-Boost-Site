import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-valorant-page',
  templateUrl: './valorant-page.component.html',
  styleUrls: ['./valorant-page.component.css']
})
export class ValorantPageComponent {
  public rrRangeOptions = ["0-20", "21-40", "41-60", "61-80", "81-100"]
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
    GameName: "Valorant",
    Status: "Processing"
  };
  public ranks: Rank[] = [
    { name: "Iron", image: "https://boostroyal.com/assets/images/divisions/valorant/ironiii.png" },
    { name: "Bronze", image: "https://boostroyal.com/assets/images/divisions/valorant/bronzeiii.png" },
    { name: "Silver", image: "https://boostroyal.com/assets/images/divisions/valorant/silveriii.png" },
    { name: "Gold", image: "https://boostroyal.com/assets/images/divisions/valorant/goldiii.png" },
    { name: "Platinum", image: "https://boostroyal.com/assets/images/divisions/valorant/platinumiii.png" },
    { name: "Diamond", image: "https://boostroyal.com/assets/images/divisions/valorant/diamondiii.png" },
    { name: "Ascendant", image: "https://boostroyal.com/assets/images/divisions/valorant/ascendantiii.png" },
  ];
  public rankOptions: string[] = ['Solo/Duo', 'Flex']

  public rankLevels: string[] = ['I', 'II', 'III', 'IV']
  public isUserLoggedIn: boolean | undefined;
  public isOrderCorrect: boolean | undefined;
  public wrongData: boolean | undefined;
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
    this.order.DiscordName = user.DiscordName.value
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

  saveRrRange(event: any) {
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
    console.log(this.order)
  }

  saveRegion(event: any) {
    this.order.SelectedRegion = event.currentTarget.value
    console.log(this.order)
  }

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
  UserId: number;
  Username: string | null;
  CurrentRank: string | null;
  CurrentRankLevel: string | null;
  CurrentRankPoints: string | null;
  OrderedRank: string | null;
  OrderedRankLevel: string | null;
  SelectedRegion: string | null;
  DiscordName: string | null;
  Email: string | null;
  GameName: string | null;
  Status: string | null;
}

interface User {
  DiscordName: string | null;
  Email: string | null;
  UserId: number;
  Username: string | null;
}
