import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http: HttpClient) { }

  submitMessage(userDetails: NgForm) {
    let controls = userDetails.form.controls;
    let payload = {
      Name: controls['name'].value,
      Email: controls['email'].value,
      Discord: controls['discord'].value,
      MessageText: controls['message'].value
    }
    const headers = { 'Content-Type': 'application/json' }
    const body = JSON.stringify(payload)
    return this.http.post("http://localhost:7196/Email/message", body, { 'headers': headers }).subscribe(r => {
      console.log(r)
    })
  }
}
