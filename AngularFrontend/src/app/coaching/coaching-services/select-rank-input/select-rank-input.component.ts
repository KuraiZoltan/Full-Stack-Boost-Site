import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-rank-input',
  templateUrl: './select-rank-input.component.html',
  styleUrls: ['./select-rank-input.component.css']
})
export class SelectRankInputComponent {
  @Input() incorrectOption!: boolean;
  @Input() rank!: Rank;

  public rankOptions = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master"]

  saveRank(event: any) {
    if (event.currentTarget.value === '0') {
      this.incorrectOption = true;
    } else {
      this.incorrectOption = false;
      this.rank.Rank = event.currentTarget.value;
    }
  }
}

interface Rank {
  Rank: string;
  Lp: string;
}
