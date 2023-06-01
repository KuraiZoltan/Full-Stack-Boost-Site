import { Component, Input } from '@angular/core';
import { Order } from '../../../interfaces/Order';
import { Rank } from '../../../interfaces/Rank';

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
    this.order.currentRank = CurrentRank
    console.log(this.order)
  }

  saveCurrentRankLevel(level: any) {
    this.order.currentRankLevel = level
    console.log(this.order)
  }

  saveLpRange(event: any) {
    if (event.currentTarget.value === 0) {
      alert("Please select a valid option!")
    } else {
      this.order.currentRankPoints = event.currentTarget.value
    }
  }
}
