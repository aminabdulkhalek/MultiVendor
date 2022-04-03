import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-recent-reviews-table',
  templateUrl: './recent-reviews-table.component.html',
  styleUrls: ['./recent-reviews-table.component.scss']
})
export class RecentReviewsTableComponent implements OnInit {
  reviews;
  errorMessage
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(API_URL+'vendor/recent-reviews').subscribe({
      next: data => {
        console.log(data)
        this.reviews = data.Reviews;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }

}
