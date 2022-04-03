import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  @Input()
  product;
  @Input()
  index;
  
  errorMessage
  star=faStar;
  half_star=faStarHalfAlt;
  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    
  }
  redirectToProduct(){
    this.router.navigate(['product'])
  }
  addToWishlist(){
    document.getElementById(`love0${this.index}`).classList.add('hide')
    document.getElementById(`love1${this.index}`).classList.remove('hide')
    const body = {
      'product_id':this.product.id
    }
    this.http.post<any>(API_URL+'customer/love-product',body).subscribe({
      next: data => {
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  removeFromWishlist(){
    document.getElementById(`love1${this.index}`).classList.add('hide')
    document.getElementById(`love0${this.index}`).classList.remove('hide')
    const body = {
      'product_id':this.product.id
    }
    this.http.post<any>(API_URL+'customer/remove-product-wishlist',body).subscribe({
      next: data => {
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  addToCart(){
    const body = {
      'product_id':this.product.id,
      'quantity':1
    }
    this.http.post<any>(API_URL+'customer/add-to-cart',body).subscribe({
      next: data => {
        console.log(data)
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}
