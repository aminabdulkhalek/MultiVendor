import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
export interface Orders {

product:string;
customer:string;
vendor: string;
price:number;
qty:number;
total:number;
order_status:number;
}

const Product_DATA: Orders[] = [
  {product:"Iphone 13 pro",customer:"John Doe",vendor:"Sarah Itani",price:1299,qty:1,total:1299,order_status:0},
  {product:"Iphone 13 pro",customer:"John Doe",vendor:"Sarah Itani",price:1299,qty:1,total:1299,order_status:0},
  {product:"Iphone 13 pro",customer:"John Doe",vendor:"Sarah Itani",price:1299,qty:1,total:1299,order_status:0},
  {product:"Iphone 13 pro",customer:"John Doe",vendor:"Sarah Itani",price:1299,qty:1,total:1299,order_status:0},
  {product:"Iphone 13 pro",customer:"John Doe",vendor:"Sarah Itani",price:1299,qty:1,total:1299,order_status:0},
  {product:"Iphone 13 pro",customer:"John Doe",vendor:"Sarah Itani",price:1299,qty:1,total:1299,order_status:0},
  {product:"Iphone 13 pro",customer:"John Doe",vendor:"Sarah Itani",price:1299,qty:1,total:1299,order_status:0},
  {product:"Iphone 13 pro",customer:"John Doe",vendor:"Sarah Itani",price:1299,qty:1,total:1299,order_status:0},
  
];

@Component({
  selector: 'app-admin-orders-table',
  templateUrl: './admin-orders-table.component.html',
  styleUrls: ['./admin-orders-table.component.scss']
})
export class AdminOrdersTableComponent implements OnInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt

  displayedColumns: string[] = ['product','customer','vendor','price','qty','total','order_status'];
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
