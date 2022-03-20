import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faFile, faImage, faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export interface Reviews {
  id: number;
  product_name: string;
  customer_name: string;
  stars: number;
  reviews_comment: string;
  review_date: Date;
  
}
const Product_DATA: Reviews[] = [
  { id: 1, customer_name: "Petter Yamout", product_name: "Blue Jeans", stars: 3.5, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('12-3-2020') },
  { id: 2, customer_name: 'red Jeans', product_name: "Blue Jeans", stars: 4, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('2-3-2020') },
  { id: 3, customer_name: 'green Jeans', product_name: "Blue Jeans", stars: 3.5, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('12-4-2020') },
  { id: 4, customer_name: 'John Doe', product_name: "Blue Jeans", stars: 3.5, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('1-3-2020') },
  { id: 5, customer_name: "Mike Itani", product_name: "Blue Jeans", stars: 3.5, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('3-4-2021') },
  { id: 6, customer_name: "Sarah Johnson", product_name: "Blue Jeans", stars: 3.5, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('1-10-2020') },
  { id: 7, customer_name: "Sarah Johnson", product_name: "Blue Jeans", stars: 3.5, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('4-3-2020') },
  { id: 8, customer_name: "Sarah Johnson", product_name: "Blue Jeans", stars: 4, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('12-3-2019') },
  { id: 9, customer_name: "Sarah Johnson", product_name: "Blue Jeans", stars: 3.5, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('12-3-2018') },
  { id: 10, customer_name: "Sarah Johnson", product_name: "Blue Jeans", stars: 3.5, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('12-3-2017') },
  { id: 11, customer_name: "Sarah Johnson", product_name: "Blue Jeans", stars: 3.5, reviews_comment: "Amazing product, great features, the color is very cool ", review_date: new Date('12-3-2016') },
];
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
  dataSource = new MatTableDataSource<Reviews>(Product_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
