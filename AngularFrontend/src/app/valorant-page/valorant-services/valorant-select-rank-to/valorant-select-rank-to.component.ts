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

  public isSoloDuo: boolean = false;
  public isFlex: boolean = false;

  saveDesiredRank(OrderedRank: any) {
    this.order.orderedRank = OrderedRank
  }

  saveDesiredRankLevel(level: any) {
    this.order.orderedRankLevel = level
  }

  saveRegion(event: any) {
    this.order.selectedRegion = event.currentTarget.value
  }

  saveSoloDuoInput() {
    this.isFlex = false
    this.isSoloDuo = true;
    this.order.rankedType = "Solo/Duo"
    console.log(this.order)
  }

  saveFlexInput() {
    this.isSoloDuo = false
    this.isFlex = true;
    this.order.rankedType = "Flex"
    console.log(this.order)
  }
}

