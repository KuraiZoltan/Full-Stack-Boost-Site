import { Component, Input, ViewChild } from '@angular/core';
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
   
  public isSoloDuo: boolean = false;
  public isFlex: boolean = false;

  saveDesiredRank(OrderedRank: any) {
    this.order.orderedRank = OrderedRank;
  }

  saveDesiredRankLevel(level: any) {
    this.order.orderedRankLevel = level;
  }

  saveRegion(event: any) {
    this.order.selectedRegion = event.currentTarget.value;
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
