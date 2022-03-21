import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export interface Reviews {
  product_name: string;
  seller_name: string;
  customer_name: string;
  stars: number;
  flags: number;
  comment: string;
  review_status: number
}

const Product_DATA: Reviews[] = [
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },
  { product_name: "iPhone 13 Pro", seller_name: "John Doe", customer_name: "John Doe", stars: 4, flags: 0, comment: "Amazing product, great features, the color is very vibrent", review_status: 12 },

];

@Component({
  selector: 'app-admin-reviews-table',
  templateUrl: './admin-reviews-table.component.html',
  styleUrls: ['./admin-reviews-table.component.scss']
})
export class AdminReviewsTableComponent implements OnInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt

  displayedColumns: string[] = ["product_name", "seller_name", "customer_name", "stars", "flags", "comment", "review_status"];
  dataSource = new MatTableDataSource<Reviews>(Product_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
