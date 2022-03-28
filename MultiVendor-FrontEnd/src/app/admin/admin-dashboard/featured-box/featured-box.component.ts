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
    const headers = { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0ODQ4NDA0OSwiZXhwIjoxNjQ4NDg3NjQ5LCJuYmYiOjE2NDg0ODQwNDksImp0aSI6Ims2SmVtUlA5T2pTZjlkQ0YiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.xGsl3aY92J6G_oTjRJB2BGgNzXDIPI4d346-8vnL14k' };

    this.http.get<any>('http://localhost:8000/api/admin/vendors', { headers }).subscribe({
      next: data => {
        this.options = data.Vendors;

        for (let i = 0; i < this.options.length; i++) {
          const vendor = this.options[i];
          const body = { id: vendor.user_id };

          this.http.post<any>('http://localhost:8000/api/user/name', body, { headers }).subscribe({
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
    const headers = { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0ODQ4NDA0OSwiZXhwIjoxNjQ4NDg3NjQ5LCJuYmYiOjE2NDg0ODQwNDksImp0aSI6Ims2SmVtUlA5T2pTZjlkQ0YiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.xGsl3aY92J6G_oTjRJB2BGgNzXDIPI4d346-8vnL14k' };
    this.http.get<any>('http://localhost:8000/api/admin/featured', { headers }).subscribe({
      next: data => {
        console.log(data);
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
    const headers = { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0ODQ4NDA0OSwiZXhwIjoxNjQ4NDg3NjQ5LCJuYmYiOjE2NDg0ODQwNDksImp0aSI6Ims2SmVtUlA5T2pTZjlkQ0YiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.xGsl3aY92J6G_oTjRJB2BGgNzXDIPI4d346-8vnL14k' };
    this.http.post<any>('http://localhost:8000/api/admin/new-featured', body, { headers }).subscribe({
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
