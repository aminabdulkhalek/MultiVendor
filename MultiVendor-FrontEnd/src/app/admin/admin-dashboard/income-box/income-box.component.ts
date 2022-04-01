import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-income-box',
  templateUrl: './income-box.component.html',
  styleUrls: ['./income-box.component.scss']
})
export class IncomeBoxComponent implements OnInit {
  sales;
  income;
  errorMessage;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getinfo()
  }
  getinfo(){
    this.http.get<any>(API_URL+'admin/total-sales').subscribe({
      next: data => {
        this.sales = data.total_sales;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL+'admin/total-income').subscribe({
      next: data => {
        this.income = data.total_income;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}
