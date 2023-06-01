import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Order } from '../../interfaces/Order'

@Component({
  selector: 'app-admin-order-table',
  templateUrl: './admin-order-table.component.html',
  styleUrls: ['./admin-order-table.component.css']
})
export class AdminOrderTableComponent {
  @Input() orders!: Order[]

  constructor(private http: HttpClient) {
      const headers = { 'Content-Type': 'application/json' }
      this.http.get<Order[]>(`https://localhost:7196/Order/getAllOrders`, { 'headers': headers, withCredentials: true }).subscribe(result => {
        var ordersObject = result;
        for (let i = 0; i < ordersObject.length; i++) {
          this.orders.push(ordersObject[i])
        }
      }, error => console.error(error));
  }

  saveStatus(event: any, orderId: any) {
    console.log(event.currentTarget.value, orderId)
    let payload = {
      Status: event.currentTarget.value,
      OrderId: orderId
    }
    const headers = {
      'Content-Type': 'application/json',
    }
    this.http.put('https://localhost:7196/Order/changeStatus', payload, { 'headers': headers, withCredentials: true }).subscribe(response => {
      console.log(response)
    })
  }

  deleteOrder(orderId: any) {
    const headers = { 'Content-Type': 'application/json' }
    this.http.post('https://localhost:7196/Order/deleteOrder', orderId, { 'headers': headers, withCredentials: true }).subscribe(response => {
      console.log(response)
      window.location.reload()
    })
  }
}
