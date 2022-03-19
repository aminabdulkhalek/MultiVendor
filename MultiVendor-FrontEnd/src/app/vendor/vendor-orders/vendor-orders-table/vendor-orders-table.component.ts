import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Products } from '../../vendor-products/products/products.component';

export interface Orders {
  id: number;
  product_name: string;
  customer_name: string;
  customer_email: string;
  price: number;
  quanitity: number;
  total: number;
  order_date: Date;
  order_status: string;

}
const Product_DATA: Orders[] = [
  { id: 1, product_name: 'Blue Jeans', customer_name: "Petter Yamout",customer_email:"petter@gmail.com", price: 50, quanitity: 1, total: 50, order_date: new Date('12-3-2020'), order_status: "Approved" },
  { id: 2, product_name: 'red Jeans', customer_name: "Sarah Johnson",customer_email:"Sarah@gmail.com", price: 40, quanitity: 4, total: 160, order_date: new Date('2-3-2020'), order_status: "Processing" },
  { id: 3, product_name: 'green Jeans', customer_name: "Amin Abdulkahelk",customer_email:"amin@gmail.com", price: 125, quanitity: 1, total: 125, order_date: new Date('12-4-2020'), order_status: "Denied" },
  { id: 4, product_name: 'Jacket', customer_name: "John Doe",customer_email:"doe@gmail.com", price: 70, quanitity: 7, total: 460, order_date: new Date('1-3-2020'), order_status: "Approved" },
  { id: 5, product_name: 'Hoddies', customer_name: "Mike Itani",customer_email:"itani@gmail.com", price: 30, quanitity: 1, total: 30, order_date:new Date('3-4-2021'), order_status: "Approved" },
  { id: 6, product_name: 'Nike Shoes', customer_name: "Sarah Johnson",customer_email:"Sarah@gmail.com", price: 240, quanitity: 2, total: 256, order_date: new Date('1-10-2020'), order_status: "Approved" },
  { id: 7, product_name: 'Blue Jeans', customer_name: "Sarah Johnson",customer_email:"Sarah@gmail.com", price: 128, quanitity: 2, total: 256, order_date: new Date('4-3-2020'), order_status: "Approved" },
  { id: 8, product_name: 'Blue Jeans', customer_name: "Sarah Johnson",customer_email:"Sarah@gmail.com", price: 128, quanitity: 2, total: 256, order_date: new Date('12-3-2019'), order_status: "Approved" },
  { id: 9, product_name: 'Blue Jeans', customer_name: "Sarah Johnson",customer_email:"Sarah@gmail.com", price: 128, quanitity: 2, total: 256, order_date: new Date('12-3-2018'), order_status: "Approved" },
  { id: 10, product_name: 'Blue Jeans', customer_name: "Sarah Johnson",customer_email:"Sarah@gmail.com", price: 128, quanitity: 2, total: 256, order_date: new Date('12-3-2017'), order_status: "Approved" },
  { id: 11, product_name: 'Blue Jeans', customer_name: "Sarah Johnson",customer_email:"Sarah@gmail.com", price: 128, quanitity: 2, total: 256, order_date: new Date('12-3-2016'), order_status: "Approved" },
];
@Component({
  selector: 'app-vendor-orders-table',
  templateUrl: './vendor-orders-table.component.html',
  styleUrls: ['./vendor-orders-table.component.scss']
})
export class VendorOrdersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'product_name', 'customer_name', 'customer_email', 'price', 'quanitity', 'total', 'order_date', 'order_status'];
  dataSource = new MatTableDataSource<Orders>(Product_DATA);

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
