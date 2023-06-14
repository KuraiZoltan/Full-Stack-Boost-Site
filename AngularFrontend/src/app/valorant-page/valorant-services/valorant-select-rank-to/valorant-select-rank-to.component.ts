import { Component, Input } from '@angular/core';
import { Order } from '../../../interfaces/Order';
import { Rank } from '../../../interfaces/Rank';

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
    this.order.orderedRank = OrderedRank
  }

  saveDesiredRankLevel(level: any) {
    this.order.orderedRankLevel = level
  }

  saveRegion(event: any) {
    this.order.selectedRegion = event.currentTarget.value
  }
}

