import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-vendor-customers-table',
  templateUrl: './vendor-customers-table.component.html',
  styleUrls: ['./vendor-customers-table.component.scss']
})
export class VendorCustomersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'gender', 'date_of_birth', 'country', 'state', 'customer_since'];
  dataSource = new MatTableDataSource<any>(null);
  customers = [];
  errorMessage;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }
  getAllCustomers() {
    this.http.get<any>(API_URL + 'vendor/customers').subscribe({
      next: data => {
        console.log(data)
        this.dataSource = new MatTableDataSource<any>(data.customers);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.customers = data.customers
        return data
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

  }
  isEmptyObject() {
    return (this.customers.length === 0);
  }
}

