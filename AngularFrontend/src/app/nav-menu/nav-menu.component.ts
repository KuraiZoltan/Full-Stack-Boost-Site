import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  userLoggedIn: boolean | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("jwt")) {
      this.userLoggedIn = true
    }
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onLogout() {
    window.location.reload()
    sessionStorage.removeItem("jwt")
    sessionStorage.removeItem("jwtExpiresAt")
  }
}
