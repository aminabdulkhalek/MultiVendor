import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from 'src/app/shared/auth.service';



@Component({
  selector: 'app-admin-reviews-table',
  templateUrl: './admin-reviews-table.component.html',
  styleUrls: ['./admin-reviews-table.component.scss']
})
export class AdminReviewsTableComponent implements OnInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt

  displayedColumns: string[] = ["product_name", "seller_name", "customer_name", "stars", "comment", "review_status"];
  dataSource = new MatTableDataSource<any>(null);
  reviews = [];
  errorMessage;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllReviews();
  }
  getAllReviews() {
    this.http.get<any>(API_URL + 'admin/reviews').subscribe({
      next: data => {
        console.log(data)
        this.dataSource = new MatTableDataSource<any>(data.Reviews);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.reviews = data.Reviews
        return data
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

  }
  isEmptyObject() {
    return (this.reviews.length === 0);
  }

  showReview(product_id) {
    const body ={
      product_id :product_id
    }
    this.http.post<any>(API_URL + 'admin/show-review', body).subscribe({
      next: data => {
        console.log(data)
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  HideReview(product_id) {
    const body ={
      product_id :product_id
    }
    this.http.post<any>(API_URL + 'admin/hide-review', body).subscribe({
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

