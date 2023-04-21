import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  userLoggedIn: boolean | undefined

  constructor() {
    this.getUser()
  }

  getUser() {
    if (sessionStorage.getItem("jwt")) {
      this.userLoggedIn = true
    }
  }
}
