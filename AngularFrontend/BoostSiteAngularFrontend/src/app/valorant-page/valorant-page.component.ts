import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-valorant-page',
  templateUrl: './valorant-page.component.html',
  styleUrls: ['./valorant-page.component.css']
})
export class ValorantPageComponent {
  public order: Order = {
    CurrentRank: "",
    CurrentRankLevel: "",
    CurrentRankPoints: "",
    OrderedRank: "",
    OrderedRankLevel: "",
    SelectedRegion: "",
    FirstName: "",
    LastName: "",
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
    { name: "Immortal", image: "https://boostroyal.com/assets/images/divisions/valorant/immortaliii.png" }
  ];
  public isUserLoggedIn: boolean | undefined;
  public isOrderCorrect: boolean | undefined;
  public wrongData: boolean | undefined;
  public loggedInUser: User = {
    Email: "",
    FirstName: "",
    LastName: ""
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
    }
  }

  getUserDetails() {
    this.loggedInUser.FirstName = sessionStorage.getItem("firstName")
    this.loggedInUser.LastName = sessionStorage.getItem("lastName")
    this.loggedInUser.Email = sessionStorage.getItem("email")
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

  saveCurrentRankLevel(event: any) {

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
}
