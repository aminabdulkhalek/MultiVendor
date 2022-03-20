import { Component, OnInit } from '@angular/core';
import { faSignOut, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vendor-reviews',
  templateUrl: './vendor-reviews.component.html',
  styleUrls: ['./vendor-reviews.component.scss']
})
export class VendorReviewsComponent implements OnInit {
  logout = faSignOut;
  notification = faBell;
  imagePath = "favicon.ico";
  constructor() { }

  ngOnInit(): void {
  }

}
