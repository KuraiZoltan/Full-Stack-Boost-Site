import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coaching-services',
  templateUrl: './coaching-services.component.html',
  styleUrls: ['./coaching-services.component.css']
})
export class CoachingServicesComponent {
  public rankLevelOptions = ["I", "II", "III", "IV"]
  public order: Order = {
    DiscordName: sessionStorage.getItem("discord_name") as string,
    Rank: "",
    Lane: "",
    SessionCount: "",
    Email: sessionStorage.getItem("email")
  }
  public rank: Rank = {
    Lp: "",
    Rank: ""
  }

  public sessionOptions = [1, 2, 3, 4, 5]
  public rankOptions = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master"]
  public lpRangeOptions = ["0-20", "21-40", "41-60", "61-80", "81-100"]
  public laneOptions = ["Top", "Middle", "Bottom", "Support", "Jungle"]
  public incorrectData = false
  public incorrectOption = false

  constructor(private http: HttpClient) { }

  saveLane(event: any) {
    if (event.currentTarget.value === '0') {
      this.incorrectOption = true
    } else {
      this.incorrectOption = false
      this.order.Lane = event.currentTarget.value
    }
  }

  saveRank(event: any) {
    if (event.currentTarget.value === '0') {
      this.incorrectOption = true
    } else {
      this.incorrectOption = false
      this.rank.Rank = event.currentTarget.value
    }
  }

  saveRankLevel(event: any) {
    if (event.currentTarget.value === '0') {
      this.incorrectOption = true
    } else {
      this.incorrectOption = false
      this.rank.Rank += ` ${event.currentTarget.value}`
    }
  }

  saveLpRange(event: any) {
    if (event.currentTarget.value === '0') {
      this.incorrectOption = true
    } else {
      this.incorrectOption = false
      this.rank.Lp = event.currentTarget.value
    }
  }

  saveSessionCount(event: any) {
    if (event.currentTarget.value === '0') {
      this.incorrectOption = true
    } else {
      this.incorrectOption = false
      this.order.SessionCount = event.currentTarget.value
    }
  }

  onSubmit(form: NgForm) {
    if (this.order.Lane !== "" && this.order.SessionCount !== "" && this.rank.Rank !== "" && this.rank.Lp !== "") {
      this.incorrectData = false
      let payload = {
        UserId: parseInt(sessionStorage.getItem("user_id") as string),
        Email: this.order.Email,
        DiscordName: this.order.DiscordName,
        PlayedLane: this.order.Lane,
        Rank: this.order.Rank = `${this.rank.Rank} ${this.rank.Lp}`,
        SessionCount: this.order.SessionCount,
        SessionsFinished: "0 hours"
      }
      const headers = { 'Content-Type': 'application/json' }
      const body = JSON.stringify(payload)
      this.http.post("https://localhost:7196/Email/sendCoachingEmail", body, { 'headers': headers, withCredentials: true }).subscribe(r => { console.log(r) })
    } else {
      this.incorrectData = true
    }
  }
}

interface Order {
  DiscordName: string;
  Rank: string;
  Lane: string;
  SessionCount: string;
  Email: any;
}

interface Rank {
  Rank: string;
  Lp: string;
}
