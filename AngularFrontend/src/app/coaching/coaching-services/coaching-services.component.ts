import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coaching-services',
  templateUrl: './coaching-services.component.html',
  styleUrls: ['./coaching-services.component.css']
})
export class CoachingServicesComponent {
  public incorrectData = false
  public incorrectOption = false
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

  constructor(private http: HttpClient) { }

  onSubmit() {
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
