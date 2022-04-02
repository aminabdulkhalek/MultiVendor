import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { faStar, faStarHalfAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from 'src/app/shared/auth.service';



@Component({
  selector: 'app-admin-products-table',
  templateUrl: './admin-products-table.component.html',
  styleUrls: ['./admin-products-table.component.scss']
})
export class AdminProductsTableComponent implements OnInit {
  dataSource = new MatTableDataSource<any>(null);
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt
  errorMessage;
  displayedColumns: string[] = ["seller_name", "product_name", "flags", "price", "stock", "preview", "product_status"];
  products =[];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.http.get<any>(API_URL + 'admin/products').subscribe({
      next: data => {
        this.dataSource = new MatTableDataSource<any>(data.products);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.products = data.products
        return data
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

  }
  isEmptyObject() {
    return (this.products.length === 0);
  }

  approveProduct(product_id) {
    const body ={
      product_id :product_id
    }
    this.http.post<any>(API_URL + 'admin/approve-product', body).subscribe({
      next: data => {
        this.getAllProducts()
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  disapproveProduct(product_id) {
    const body ={
      product_id :product_id
    }
    this.http.post<any>(API_URL + 'admin/disapprove-product', body).subscribe({
      next: data => {
        this.getAllProducts()
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}


