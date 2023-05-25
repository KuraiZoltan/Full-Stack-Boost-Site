import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-rank-to',
  templateUrl: './select-rank-to.component.html',
  styleUrls: ['../league-services.component.css']
})
export class SelectRankToComponent {
  @Input() order!: Order;
  @Input() ranks!: Rank[];
  @Input() rankOptions!: string[];
  @Input() rankLevels!: string[];

  constructor() { }

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
