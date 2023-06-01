import { Component, Input } from '@angular/core';
import { Order } from '../../../interfaces/Order';
import { Rank } from '../../../interfaces/Rank';

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
    this.order.currentRank = CurrentRank
    console.log(this.order)
  }

  saveCurrentRankLevel(level: any) {

    this.order.currentRankLevel = level
    console.log(this.order)
  }

  saveRrRange(event: any) {
    if (event.currentTarget.value === 0) {
      alert("Please select a valid option!")
    } else {
      this.order.currentRankPoints = event.currentTarget.value
    }
  }
}
