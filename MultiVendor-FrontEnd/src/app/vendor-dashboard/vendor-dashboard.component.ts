import { Component, OnInit } from '@angular/core';
import { faBell, faSignOut } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.scss']
})
export class VendorDashboardComponent implements OnInit {
  logout=faSignOut;
  notification = faBell
  constructor() { }

  ngOnInit(): void {
  }
   
}


