import { Component, OnInit } from '@angular/core';

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
  { id: 1, name: 'Hydrogen', price: "1299$", flags: 3, reviews: 5, stock: 100, preview: "", status: "Approved" },
  { id: 2, name: 'Hydrogen', price: "1299$", flags: 3, reviews: 5, stock: 100, preview: "", status: "Approved" },
  { id: 3, name: 'Hydrogen', price: "1299$", flags: 3, reviews: 5, stock: 100, preview: "", status: "Approved" },
  { id: 4, name: 'Hydrogen', price: "1299$", flags: 3, reviews: 5, stock: 100, preview: "", status: "Approved" },
  { id: 5, name: 'Hydrogen', price: "1299$", flags: 3, reviews: 5, stock: 100, preview: "", status: "Approved" },
  { id: 6, name: 'Hydrogen', price: "1299$", flags: 3, reviews: 5, stock: 100, preview: "", status: "Approved" },
  { id: 7, name: 'Hydrogen', price: "1299$", flags: 3, reviews: 5, stock: 100, preview: "", status: "Approved" },
  { id: 8, name: 'Hydrogen', price: "1299$", flags: 3, reviews: 5, stock: 100, preview: "", status: "Approved" },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'flags', 'reviews', 'stock', 'preview', 'status', 'action'];
  dataSource = Product_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
