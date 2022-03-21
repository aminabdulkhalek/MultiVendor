import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export interface Vendors {
  logo: string;
  seller_name: string;
  seller_email: string;
  flags: number;
  phone: string;
  seller_status: number;
}

const Product_DATA: Vendors[] = [
  { logo: "/assets/logo.png", seller_name: "John Doe", seller_email: "example@gmail.com", flags: 5, phone: "01789325", seller_status: 0 },
  { logo: "/assets/logo.png", seller_name: "John Doe", seller_email: "example@gmail.com", flags: 5, phone: "01789325", seller_status: 0 },
  { logo: "/assets/logo.png", seller_name: "John Doe", seller_email: "example@gmail.com", flags: 5, phone: "01789325", seller_status: 0 },
  { logo: "/assets/logo.png", seller_name: "John Doe", seller_email: "example@gmail.com", flags: 5, phone: "01789325", seller_status: 0 },
  { logo: "/assets/logo.png", seller_name: "John Doe", seller_email: "example@gmail.com", flags: 5, phone: "01789325", seller_status: 0 },
  { logo: "/assets/logo.png", seller_name: "John Doe", seller_email: "example@gmail.com", flags: 5, phone: "01789325", seller_status: 0 },
  { logo: "/assets/logo.png", seller_name: "John Doe", seller_email: "example@gmail.com", flags: 5, phone: "01789325", seller_status: 0 },
  { logo: "/assets/logo.png", seller_name: "John Doe", seller_email: "example@gmail.com", flags: 5, phone: "01789325", seller_status: 0 },

];
@Component({
  selector: 'app-admin-vendors-table',
  templateUrl: './admin-vendors-table.component.html',
  styleUrls: ['./admin-vendors-table.component.scss']
})
export class AdminVendorsTableComponent implements OnInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt

  displayedColumns: string[] = ["logo", "seller_name", "seller_email", "flags", "phone", "seller_status"];
  dataSource = new MatTableDataSource<Vendors>(Product_DATA);

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
