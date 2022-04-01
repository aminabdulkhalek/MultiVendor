import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-featured-box',
  templateUrl: './featured-box.component.html',
  styleUrls: ['./featured-box.component.scss']
})
export class FeaturedBoxComponent implements OnInit {
  selected_value;
  featured: string;
  errorMessage;
  options;
  names;


  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.getFeatured();
    this.getVendors();
  }

  getVendors(){

    this.http.get<any>('http://localhost:8000/api/admin/vendors').subscribe({
      next: data => {
        this.options = data.Vendors;

        for (let i = 0; i < this.options.length; i++) {
          const vendor = this.options[i];
          const body = { id: vendor.user_id };

          this.http.post<any>('http://localhost:8000/api/user/name', body).subscribe({
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
  getFeatured(){
    this.http.get<any>('http://localhost:8000/api/admin/featured').subscribe({
      next: data => {
        this.featured = data.Vendor_Name;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  newFeatured(selected_value) {
     
    const body = { vendor_id: selected_value };
    this.http.post<any>('http://localhost:8000/api/admin/new-featured', body).subscribe({
      next: data => {
        console.log(data.message)
        this.getFeatured();
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }

}
