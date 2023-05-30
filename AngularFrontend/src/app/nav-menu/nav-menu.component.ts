import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
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

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    if (sessionStorage.getItem("username")) {
      this.userLoggedIn = true
    }
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  async onLogout() {
    const headers = { 'Content-Type': 'application/json' }
    this.http.get("https://localhost:7196/User/logout", { 'headers': headers, withCredentials: true, observe: 'response' as 'response' }).subscribe(r => { console.log(r) })
    sessionStorage.removeItem("email")
    sessionStorage.removeItem("discord_name")
    sessionStorage.removeItem("user_id")
    sessionStorage.removeItem("role")
    sessionStorage.removeItem("username")
    window.location.reload()
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-shrink');
    } else {
      element.classList.remove('navbar-shrink');
    }
  }
}
//navbar navbar-expand-lg navbar-dark fixed-top

//navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink
