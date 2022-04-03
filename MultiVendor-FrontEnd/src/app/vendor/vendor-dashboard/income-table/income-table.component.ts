import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-income-table',
  templateUrl: './income-table.component.html',
  styleUrls: ['./income-table.component.scss']
})
export class IncomeTableComponent implements OnInit {
 total_sales;
 total_payout;
 errorMessage;

 constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(API_URL+'vendor/total-payout').subscribe({
      next: data => {
        this.total_payout = data.total_payout;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL+'vendor/total-sales').subscribe({
      next: data => {
        this.total_sales = data.total_Sales;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }

}
