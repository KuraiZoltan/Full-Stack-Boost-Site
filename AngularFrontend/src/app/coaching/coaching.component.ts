import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.css']
})
export class CoachingComponent {
  public order: Order = {
    DiscordName: "",
    Rank: "",
    Lane: "",
    SessionCount: ""
  }
  public rank: Rank = {
    Lp: "",
    Rank: ""
  }

  public sessionOptions = [1, 2, 3, 4, 5]
  public rankOptions = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master"]
  public lpRangeOptions = ["0-20", "21-40", "41-60", "61-80", "81-100"]
  public laneOptions = ["Top", "Middle", "Bottom", "Support", "Jungle"]

  constructor(private http: HttpClient) { }

  saveLane(event: any) {
    this.order.Lane = event.currentTarget.value
  }

  saveRank(event: any) {
    this.rank.Rank = event.currentTarget.value
  }
  saveLpRange(event: any) {
    this.rank.Lp = event.currentTarget.value
  }

  saveSessionCount(event: any) {
    this.order.SessionCount = event.currentTarget.value
  }

  onSubmit(form: NgForm) {
    this.order.DiscordName = `${form.form.controls["discord-name"].value} ${form.form.controls["discord-tag"].value}`
    let payload = this.order
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${sessionStorage.getItem("jwt")}` }
    const body = JSON.stringify(payload)
    this.http.post('https://localhost:7196/Coaching/sendOrder', body, { 'headers': headers }).subscribe(response => {console.log(response) })
  }
}

interface Order {
  DiscordName: string;
  Rank: string;
  Lane: string;
  SessionCount: string;
}

interface Rank {
  Rank: string;
  Lp: string;
}
