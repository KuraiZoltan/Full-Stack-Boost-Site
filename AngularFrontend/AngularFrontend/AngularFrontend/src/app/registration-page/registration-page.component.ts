import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  constructor(private http: HttpClient) { }

  submit(userForm: any) {
    let payload: User = {
      FirstName: userForm.form.controls["first-name"].value,
      LastName: userForm.form.controls["last-name"].value,
      Username: userForm.form.controls["username"].value,
      Email: userForm.form.controls["email"].value,
      Password: userForm.form.controls["password"].value,
      PasswordConfirmation: userForm.form.controls["confirm-password"].value
    }
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(payload)
    return this.http.post("https://localhost:7196/User/registrate", body, { 'headers': headers }).subscribe(r => { this.checkResponse(r) })
  }

  checkResponse(result: any) {
    if (result.statusCode === 200) {
      window.location.href = '/login'
      alert("Registered successfully")
    } else {
      alert("Something went wrong! Check your email and password!")
    }
  }
}

interface User {
  FirstName: string;
  LastName: string;
  Username: string;
  Email: string;
  Password: string;
  PasswordConfirmation: string;
}
