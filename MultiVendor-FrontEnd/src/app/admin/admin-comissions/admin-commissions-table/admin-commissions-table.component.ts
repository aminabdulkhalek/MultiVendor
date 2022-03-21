import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export interface Commissions {
  seller_name: string;
  commission_rate: number;
  total_sales: number;
  recevied_amount: number;
  commission_amount: number;
  remaining_amount: number;
  last_paid_amount: number
}

const Product_DATA: Commissions[] = [
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },
  { seller_name: "John Doe", commission_rate: 20.0, total_sales: 1050.00, recevied_amount: 0.00, commission_amount: 0.00, remaining_amount: 1050.00, last_paid_amount: 0.00 },

];

@Component({
  selector: 'app-admin-commissions-table',
  templateUrl: './admin-commissions-table.component.html',
  styleUrls: ['./admin-commissions-table.component.scss']
})
export class AdminCommissionsTableComponent implements OnInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt

  displayedColumns: string[] = ["seller_name","commission_rate","total_sales","recevied_amount","commission_amount","remaining_amount","last_paid_amount","action"];
  dataSource = new MatTableDataSource<Commissions>(Product_DATA);

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
