import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valorant-select-rank-from',
  templateUrl: './valorant-select-rank-from.component.html',
  styleUrls: ['../valorant-services.component.css']
})
export class ValorantSelectRankFromComponent {
  @Input() order!: Order;
  @Input() ranks!: Rank[];
  @Input() rankLevels!: string[];

  public rrRangeOptions = ["0-20", "21-40", "41-60", "61-80", "81-100"]

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
