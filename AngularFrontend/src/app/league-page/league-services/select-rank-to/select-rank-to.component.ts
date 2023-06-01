import { Component, Input } from '@angular/core';
import { Order } from '../../../interfaces/Order';
import { Rank } from '../../../interfaces/Rank';

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
    this.order.orderedRank = OrderedRank
    console.log(this.order)
  }

  saveDesiredRankLevel(level: any) {
    this.order.orderedRankLevel = level
    console.log(event)
  }

  saveRegion(event: any) {
    this.order.selectedRegion = event.currentTarget.value
    console.log(this.order)
  }
}
