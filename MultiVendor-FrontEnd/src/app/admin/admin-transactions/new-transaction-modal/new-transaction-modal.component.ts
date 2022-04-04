import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-new-transaction-modal',
  templateUrl: './new-transaction-modal.component.html',
  styleUrls: ['./new-transaction-modal.component.scss']
})
export class NewTransactionModalComponent implements OnInit {
  selected_value;
  errorMessage;
  error;
  message;
  options;
  names;
  commission = 0
  total_sales='0'
  vendor;
  amount_to_pay;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getVendors()
  }
  getVendors(){

    this.http.get<any>(API_URL+'admin/vendors0').subscribe({
      next: data => {
        this.options = data.Vendors;

        for (let i = 0; i < this.options.length; i++) {
          const vendor = this.options[i];
          const body = { id: vendor.user_id };

          this.http.post<any>(API_URL+'user/name', body).subscribe({
            next: data => {
              this.options[i].name = data.Name;

            },
            error: error => {
              this.errorMessage = error.message;
              console.error('There was an error!', this.errorMessage);
            }
          })
        }
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  getinfo(id){
    this.error='';
    this.message='';
    const body ={
      'vendor_id':id
    }
    this.http.post<any>(API_URL+'admin/get-vendor',body).subscribe({
      next: data => {
        this.vendor = data.vendor;
        this.commission = data.vendor.commission_rate
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.post<any>(API_URL+'admin/get-balance',body).subscribe({
      next: data => {
        this.total_sales = data.Balance.total_sales
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  submitPayment(id,amount){
    this.error='';
    this.message='';
    const body ={
      'vendor_id':id,
      'amount':amount
    }
    this.http.post<any>(API_URL+'admin/make-transaction',body).subscribe({
      next: data => {
        if(data.error){
          this.error = data.error;
        }
        this.message = data.message;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}
