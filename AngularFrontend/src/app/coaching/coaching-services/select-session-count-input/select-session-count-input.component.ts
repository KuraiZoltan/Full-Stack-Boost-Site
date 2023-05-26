import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-session-count-input',
  templateUrl: './select-session-count-input.component.html',
  styleUrls: ['./select-session-count-input.component.css']
})
export class SelectSessionCountInputComponent {
  @Input() incorrectOption!: boolean;
  @Input() order!: Order;

  public sessionOptions = [1, 2, 3, 4, 5]

  saveSessionCount(event: any) {
    if (event.currentTarget.value === '0') {
      this.incorrectOption = true
    } else {
      this.incorrectOption = false
      this.order.SessionCount = event.currentTarget.value
    }
  }
}

interface Order {
  DiscordName: string;
  Rank: string;
  Lane: string;
  SessionCount: string;
  Email: any;
}
