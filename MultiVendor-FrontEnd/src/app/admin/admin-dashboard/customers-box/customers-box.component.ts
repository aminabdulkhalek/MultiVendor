import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-customers-box',
  templateUrl: './customers-box.component.html',
  styleUrls: ['./customers-box.component.scss']
})
export class CustomersBoxComponent implements OnInit {
  total_customers;
  this_customers;
  last_customers;
  errorMessage;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initBox()

  }

  initBox(){
    this.http.get<any>(API_URL+'admin/nb-customers').subscribe({
      next: data => {
        this.total_customers = data.nbCustomers;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL+'admin/this-month-customers').subscribe({
      next: data => {
        this.this_customers = data.this_Month_customers.length;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL+'admin/last-month-customers').subscribe({
      next: data => {
        this.last_customers = data.Last_Month_customers.length;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }

}
