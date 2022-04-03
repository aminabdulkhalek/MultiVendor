import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faFile, faImage, faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-vendor-reviews-table',
  templateUrl: './vendor-reviews-table.component.html',
  styleUrls: ['./vendor-reviews-table.component.scss']
})
export class VendorReviewsTableComponent implements OnInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt
  displayedColumns: string[] = ['id', 'product_name', 'customer_name', 'stars', 'reviews_comment', 'review_date'];
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
    this.http.get<any>(API_URL + 'vendor/reviews').subscribe({
      next: data => {
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
}