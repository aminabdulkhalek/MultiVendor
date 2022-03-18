import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { faStar, faStarHalfAlt, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface Products {
  id: number;
  name: string;
  price: string;
  flags: number;
  reviews: number;
  stock: number;
  preview: string;
  status: string;

}

const Product_DATA: Products[] = [
  { id: 1, name: 'iphone 13 Pro MAX', price: "1299$", flags: 1, reviews: 2, stock: 10, preview: "/assets/img.png", status: "Approved" },
  { id: 2, name: 'Red Scarf', price: "1299$", flags: 0, reviews: 1, stock: 4, preview: "/assets/img.png", status: "Pending" },
  { id: 3, name: 'Chair', price: "1299$", flags: 0, reviews: 4, stock: 3, preview: "/assets/img.png", status: "Approved" },
  { id: 4, name: 'Blue Jeans', price: "1299$", flags: 1, reviews: 1.5, stock: 1, preview: "/assets/img.png", status: "Denied" },
  { id: 5, name: 'Black Shirt', price: "1299$", flags: 0, reviews: 3.5, stock: 3, preview: "/assets/img.png", status: "Approved" },
  { id: 6, name: 'Polo T-Shirt', price: "1299$", flags: 2, reviews: 2.5, stock: 5, preview: "/assets/img.png", status: "Approved" },
  { id: 7, name: 'Sockes', price: "1299$", flags: 0, reviews: 4, stock: 100, preview: "/assets/img.png", status: "Pending" },
  { id: 8, name: 'Suit', price: "1299$", flags: 0, reviews: 3, stock: 3, preview: "/assets/img.png", status: "Approved" },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt

  displayedColumns: string[] = ['id', 'name', 'price', 'flags', 'reviews', 'stock', 'preview', 'status', 'action'];
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

