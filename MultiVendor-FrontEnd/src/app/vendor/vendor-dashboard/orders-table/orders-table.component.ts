import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  orders;
  errorMessage;
  pending;
  approved;
  disapproved;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(API_URL+'vendor/nb-orders').subscribe({
      next: data => {
        this.orders = data.nbOrders;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

    this.http.get<any>(API_URL+'vendor/nb-pending-orders').subscribe({
      next: data => {
        this.pending = data.Nb_pending_orders*100/this.orders;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

    this.http.get<any>(API_URL+'vendor/nb-approved-orders').subscribe({
      next: data => {
        this.approved = data.nb_approved_orders*100/this.orders;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

    this.http.get<any>(API_URL+'vendor/nb-disapproved-orders').subscribe({
      next: data => {
        this.disapproved = data.nb_disapproved_orders*100/this.orders;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

  }

}
