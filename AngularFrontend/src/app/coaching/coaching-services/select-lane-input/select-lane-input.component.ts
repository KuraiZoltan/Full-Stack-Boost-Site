import { Component, Input } from '@angular/core';
import { Order } from '../../../interfaces/CoachingOrder';

@Component({
  selector: 'app-select-lane-input',
  templateUrl: './select-lane-input.component.html',
  styleUrls: ['./select-lane-input.component.css']
})
export class SelectLaneInputComponent {
  @Input() incorrectOption!: boolean;
  @Input() order!: Order;

  public laneOptions = ["Top", "Middle", "Bottom", "Support", "Jungle"]

  saveLane(event: any) {
    if (event.currentTarget.value === '0') {
      this.incorrectOption = true
    } else {
      this.incorrectOption = false
      this.order.Lane = event.currentTarget.value
    }
  }
}
