import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { API_URL } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-vendor-orders-table',
  templateUrl: './vendor-orders-table.component.html',
  styleUrls: ['./vendor-orders-table.component.scss']
})
export class VendorOrdersTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'product_name', 'customer_name', 'customer_email', 'price', 'quantity', 'total', 'order_date', 'order_status'];
  dataSource = new MatTableDataSource<any>(null);

  errorMessage;
  orders =[];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders() {
    this.http.get<any>(API_URL + 'vendor/orders').subscribe({
      next: data => {
        console.log(data)
        this.dataSource = new MatTableDataSource<any>(data.orders);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.orders = data.orders
        return data
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

  }
  isEmptyObject() {
    return (this.orders.length === 0);
  }
}
