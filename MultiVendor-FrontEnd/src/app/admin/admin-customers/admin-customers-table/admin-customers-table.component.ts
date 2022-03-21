import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Customers {
  id: number;
  name: string;
  email: string;
  gender: string;
  date_of_birth: Date;
  country: string;
  state: string;
  customer_since: Date;

}
const Product_DATA: Customers[] = [
  { id: 1, name: "Petter Yamout", email: "example@gmail.com", gender: "Male", date_of_birth: new Date('12-3-2020'), country: "USA", state: "LA", customer_since: new Date('12-3-2020') },
  { id: 2, name: 'red Jeans', email: "example@gmail.com", gender: "Female", date_of_birth: new Date('2-3-2020'), country: "USA", state: 'NY', customer_since: new Date('2-3-2020') },
  { id: 3, name: 'green Jeans', email: "example@gmail.com", gender: "Male", date_of_birth: new Date('12-4-2020'), country: "Lebanon", state: 'Beirut', customer_since: new Date('12-4-2020') },
  { id: 4, name: 'John Doe', email: "example@gmail.com", gender: "Male", date_of_birth: new Date('1-3-2020'), country: "USA", state: 'PA', customer_since: new Date('1-3-2020') },
  { id: 5, name: "Mike Itani", email: "example@gmail.com", gender: "Male", date_of_birth: new Date('3-4-2021'), country: "USA", state: 'MX', customer_since: new Date('3-4-2021') },
  { id: 6, name: "Sarah Johnson", email: "example@gmail.com", gender: "Male", date_of_birth: new Date('1-10-2020'), country: "USA", state: 'OH', customer_since: new Date('1-10-2020') },
  { id: 7, name: "Sarah Johnson", email: "example@gmail.com", gender: "Male", date_of_birth: new Date('4-3-2020'), country: "USA", state: "MI", customer_since: new Date('4-3-2020') },
  { id: 8, name: "Sarah Johnson", email: "example@gmail.com", gender: "Female", date_of_birth: new Date('12-3-2019'), country: "USA", state: "256", customer_since: new Date('12-3-2019') },
  { id: 9, name: "Sarah Johnson", email: "example@gmail.com", gender: "Male", date_of_birth: new Date('12-3-2018'), country: "USA", state: "256", customer_since: new Date('12-3-2018') },
  { id: 10, name: "Sarah Johnson", email: "example@gmail.com", gender: "Male", date_of_birth: new Date('12-3-2017'), country: "USA", state: "256", customer_since: new Date('12-3-2017') },
  { id: 11, name: "Sarah Johnson", email: "example@gmail.com", gender: "Male", date_of_birth: new Date('12-3-2016'), country: "USA", state: "256", customer_since: new Date('12-3-2016') },
];
@Component({
  selector: 'app-admin-customers-table',
  templateUrl: './admin-customers-table.component.html',
  styleUrls: ['./admin-customers-table.component.scss']
})
export class AdminCustomersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'date_of_birth', 'country', 'state', 'customer_since'];
  dataSource = new MatTableDataSource<Customers>(Product_DATA);

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
