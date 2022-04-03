import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-recent-orders-table',
  templateUrl: './recent-orders-table.component.html',
  styleUrls: ['./recent-orders-table.component.scss']
})
export class RecentOrdersTableComponent implements OnInit {
  orders;
  errorMessage;
  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.getRecent()
  }

  getRecent(){
      this.http.get<any>(API_URL+'vendor/recent-orders').subscribe({
        next: data => {
          this.orders = data.recent_orders;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }

}
