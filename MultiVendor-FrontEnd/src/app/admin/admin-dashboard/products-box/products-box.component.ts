import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-products-box',
  templateUrl: './products-box.component.html',
  styleUrls: ['./products-box.component.scss']
})
export class ProductsBoxComponent implements OnInit {
  products;
  nb_products;
  errorMessage;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initBox()
  }
  initBox(){
    this.http.get<any>(API_URL+'admin/top-selling').subscribe({
      next: data => {
        this.products = data.top_Selling;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL+'admin/products').subscribe({
      next: data => {
        this.nb_products = data.products.length;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}
