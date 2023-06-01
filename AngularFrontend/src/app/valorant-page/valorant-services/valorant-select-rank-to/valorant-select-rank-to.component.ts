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
    console.log(this.order)
  }

  saveDesiredRankLevel(level: any) {
    this.order.orderedRankLevel = level
    console.log(this.order)
  }

  saveRegion(event: any) {
    this.order.selectedRegion = event.currentTarget.value
    console.log(this.order)
  }
}

