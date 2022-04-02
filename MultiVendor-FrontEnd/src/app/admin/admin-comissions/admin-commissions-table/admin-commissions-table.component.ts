import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from 'src/app/shared/auth.service';



@Component({
  selector: 'app-admin-commissions-table',
  templateUrl: './admin-commissions-table.component.html',
  styleUrls: ['./admin-commissions-table.component.scss']
})
export class AdminCommissionsTableComponent implements OnInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt
  rate!: String;
  displayedColumns: string[] = ["seller_name", "commission_rate", "total_sales", "recevied_amount", "commission_amount", "remaining_amount", "action"];

  dataSource = new MatTableDataSource<any>(null);
  vendors = [];
  errorMessage;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBalances();
  }
  getBalances() {
    this.http.get<any>(API_URL + 'admin/balances').subscribe({
      next: data => {
        // console.log(data)
        this.dataSource = new MatTableDataSource<any>(data.Balances);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.vendors = data.Balances;
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

  updateCommission(id) {
    var inputValue = (<HTMLInputElement>document.getElementById(id)).value;
    const body = {
      'vendor_id': id,
      'commission_rate': inputValue,
    }
    this.http.post<any>(API_URL + 'admin/update-commission', body).subscribe({
      next: data => {
        this.rate=''
        this.getBalances()
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }

}
