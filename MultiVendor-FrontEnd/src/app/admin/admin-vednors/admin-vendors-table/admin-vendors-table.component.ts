import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-admin-vendors-table',
  templateUrl: './admin-vendors-table.component.html',
  styleUrls: ['./admin-vendors-table.component.scss']
})
export class AdminVendorsTableComponent implements OnInit {
  dataSource = new MatTableDataSource<any>(null);
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt
  errorMessage;
  displayedColumns: string[] = ["logo", "name", "email", "flags", "phone", "seller_status"];
  vendors =[];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllVendors();
  }
  getAllVendors() {
    this.http.get<any>(API_URL + 'admin/vendors').subscribe({
      next: data => {
        // console.log(data)
        this.dataSource = new MatTableDataSource<any>(data.Vendors);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.vendors = data.Vendors
        return data
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

  }
  isEmptyObject() {
    return (this.vendors.length === 0);
  }

  approveProduct(vendor_id) {
    const body ={
      vendor_id :vendor_id
    }
    this.http.post<any>(API_URL + 'admin/approve-vendor', body).subscribe({
      next: data => {
        this.getAllVendors()
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  disapproveProduct(vendor_id) {
    const body ={
      vendor_id :vendor_id
    }
    this.http.post<any>(API_URL + 'admin/disapprove-vendor', body).subscribe({
      next: data => {
        this.getAllVendors()
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}


