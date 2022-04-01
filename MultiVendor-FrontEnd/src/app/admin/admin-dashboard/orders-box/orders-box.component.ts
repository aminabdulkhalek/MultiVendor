import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../shared/auth.service';


@Component({
  selector: 'app-orders-box',
  templateUrl: './orders-box.component.html',
  styleUrls: ['./orders-box.component.scss']
})
export class OrdersBoxComponent implements OnInit {
  orders;
  errorMessage;
  pending;
  approved;
  disapproved;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(API_URL+'admin/nb-orders').subscribe({
      next: data => {
        this.orders = data.nbOrders;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

    this.http.get<any>(API_URL+'admin/nb-pending-orders').subscribe({
      next: data => {
        this.pending = data.pending_orders*100/this.orders;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

    this.http.get<any>(API_URL+'admin/nb-approved-orders').subscribe({
      next: data => {
        this.approved = data.approved_orders*100/this.orders;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

    this.http.get<any>(API_URL+'admin/nb-disapproved-orders').subscribe({
      next: data => {
        this.disapproved = data.disapproved_orders*100/this.orders;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

  }

}
