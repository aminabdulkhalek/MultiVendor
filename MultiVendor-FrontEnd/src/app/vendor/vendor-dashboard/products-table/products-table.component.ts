import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  products;
  nb_products;
  errorMessage;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initBox()
  }
  initBox(){
    this.http.get<any>(API_URL+'vendor/top-selling').subscribe({
      next: data => {
        this.products = data.top_selling;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL+'vendor/nb-products').subscribe({
      next: data => {
        this.nb_products = data.products;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}
