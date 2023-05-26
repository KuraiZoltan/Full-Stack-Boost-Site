import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-lp-input',
  templateUrl: './select-lp-input.component.html',
  styleUrls: ['./select-lp-input.component.css']
})
export class SelectLpInputComponent {
  @Input() incorrectOption!: boolean;
  @Input() rank!: Rank;

  public lpRangeOptions = ["0-20", "21-40", "41-60", "61-80", "81-100"]

  saveLpRange(event: any) {
    if (event.currentTarget.value === '0') {
      this.incorrectOption = true
    } else {
      this.incorrectOption = false
      this.rank.Lp = event.currentTarget.value
    }
  }
}

interface Rank {
  Rank: string;
  Lp: string;
}
