import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders-box',
  templateUrl: './orders-box.component.html',
  styleUrls: ['./orders-box.component.scss']
})
export class OrdersBoxComponent implements OnInit {
  orders;
  errorMessage;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY0ODQ3ODA3MCwiZXhwIjoxNjQ4NDgxNjcwLCJuYmYiOjE2NDg0NzgwNzAsImp0aSI6IjR0MFI5OXVOZThaSWQ4eFEiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.IBraaqwUIqpGwlNl_bEkHzhOGRThsmav1T1B3FpcWkM' }
    this.http.get<any>('http://localhost:8000/api/admin/nb-orders',{headers}).subscribe({
        next: data => {
            this.orders = data.nbOrders;
            console.log(data.nbOrders)
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', this.errorMessage);
        }
    })
  }

}
