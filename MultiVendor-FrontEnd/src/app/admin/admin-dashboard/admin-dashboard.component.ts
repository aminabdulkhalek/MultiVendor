import { Component, OnInit } from '@angular/core';
import { faSignOut, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  logout=faSignOut;
  notification = faBell;
  imagePath = "favicon.ico";
  isDash = true;
  constructor() { }

  ngOnInit(): void {
  }

}
