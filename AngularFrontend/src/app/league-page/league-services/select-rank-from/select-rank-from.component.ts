import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-rank-from',
  templateUrl: './select-rank-from.component.html',
  styleUrls: ['../league-services.component.css']
})
export class SelectRankFromComponent {
  @Input() order!: Order;
  @Input() ranks!: Rank[];
  @Input() rankOptions!: string[];
  @Input() rankLevels!: string[];
  public lpRangeOptions = ["0-20", "21-40", "41-60", "61-80", "81-100"]


  constructor() { }

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

interface Rank {
  name: string;
  image: string
}
