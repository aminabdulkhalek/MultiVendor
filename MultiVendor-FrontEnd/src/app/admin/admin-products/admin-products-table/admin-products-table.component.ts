import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export interface Products {
  seller_name:string;
  product_name:string;
  flags: number;
  price: number;
  qty:number;
  preview: string;
  product_status:number
}

const Product_DATA: Products[] = [
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png" ,product_status:0},
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png",product_status:0},
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png",product_status:0},
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png",product_status:0},
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png",product_status:0},
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png",product_status:0},
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png",product_status:0},
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png",product_status:0},
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png",product_status:0},
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png",product_status:0},
  { seller_name: "John Doe",product_name:"iPhone 13 Pro",flags:2, price:1299,qty:12,preview:"/assets/img.png",product_status:0},
  
];

@Component({
  selector: 'app-admin-products-table',
  templateUrl: './admin-products-table.component.html',
  styleUrls: ['./admin-products-table.component.scss']
})
export class AdminProductsTableComponent implements OnInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt

  displayedColumns: string[] = ["seller_name","product_name","flags","price","qty", "preview","product_status"];
  dataSource = new MatTableDataSource<Products>(Product_DATA);

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
