import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  userLoggedIn: boolean | undefined;

  constructor(private router: Router, private guard: AuthGuard) { }

  ngOnInit() {
    if (this.guard.canActivate()) {
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
    sessionStorage.removeItem("email")
    sessionStorage.removeItem("discord_name")
    sessionStorage.removeItem("user_id")
    sessionStorage.removeItem("role")
    sessionStorage.removeItem("username")
  }
}
