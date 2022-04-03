import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.scss']
})
export class CustomersTableComponent implements OnInit {

  total_customers;
  this_customers;
  last_customers;
  errorMessage;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initBox()

  }

  initBox(){
    this.http.get<any>(API_URL+'vendor/nb-customers').subscribe({
      next: data => {
        this.total_customers = data.nbCustomers;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL+'vendor/this-month-customers').subscribe({
      next: data => {
        this.this_customers = data.this_month_customers;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL+'vendor/last-month-customers').subscribe({
      next: data => {
        this.last_customers = data.last_month_customers;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }

}
