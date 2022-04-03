import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from 'src/app/shared/auth.service';
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
    this.http.get<any>(API_URL + 'admin/orders').subscribe({
      next: data => {
        console.log(data)
        this.dataSource = new MatTableDataSource<any>(data.Orders);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.orders = data.Orders
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

  approveOrder(order_id) {
    const body ={
      order_id :order_id
    }
    this.http.post<any>(API_URL + 'admin/approve-order', body).subscribe({
      next: data => {
        console.log(data)
        this.getAllOrders()
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  disapproveOrder(order_id) {
    const body ={
      order_id :order_id
    }
    this.http.post<any>(API_URL + 'admin/disapprove-order', body).subscribe({
      next: data => {
        console.log(data)
        this.getAllOrders()
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}


