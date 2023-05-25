import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valorant-select-rank-to',
  templateUrl: './valorant-select-rank-to.component.html',
  styleUrls: ['../valorant-services.component.css']
})
export class ValorantSelectRankToComponent {
  @Input() order!: Order;
  @Input() ranks!: Rank[];
  @Input() rankLevels!: string[];

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
