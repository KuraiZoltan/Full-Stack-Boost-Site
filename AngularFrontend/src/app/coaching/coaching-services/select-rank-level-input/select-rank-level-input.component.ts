import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-rank-level-input',
  templateUrl: './select-rank-level-input.component.html',
  styleUrls: ['./select-rank-level-input.component.css']
})
export class SelectRankLevelInputComponent {
  @Input() incorrectOption!: boolean;
  @Input() rank!: Rank;

  public rankLevelOptions = ["I", "II", "III", "IV"]

  saveRankLevel(event: any) {
    if (event.currentTarget.value === '0') {
      this.incorrectOption = true
    } else {
      this.incorrectOption = false
      this.rank.Rank += ` ${event.currentTarget.value}`
    }
  }
}

interface Rank {
  Rank: string;
  Lp: string;
}
