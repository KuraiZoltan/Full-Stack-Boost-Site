import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean | undefined;

  constructor(private router: Router, private http: HttpClient) { }

  login(loginCredentials: any) {
    let payload = {
      Username: loginCredentials.form.controls["username"].value,
      Password: loginCredentials.form.controls["password"].value
    }
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(payload)
    this.http.post("http://localhost:7196/User/loginUser", body, { "headers": headers, withCredentials: true, observe: 'response' as 'response' })
      .subscribe(response => {
        const token = (<any>response.body)
        sessionStorage.setItem("email", token.email)
        sessionStorage.setItem("discord_name", token.discordName)
        sessionStorage.setItem("user_id", token.userId)
        sessionStorage.setItem("role", token.role)
        sessionStorage.setItem("username", token.username)
        this.invalidLogin = false
        window.location.href = "/boosting"
      }, err => {
        this.invalidLogin = true
      })
  }
}
