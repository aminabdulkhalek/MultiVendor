import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faDollarSign, faHome, faStar, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vendor-dashboard-sidebar',
  templateUrl: './vendor-dashboard-sidebar.component.html',
  styleUrls: ['./vendor-dashboard-sidebar.component.scss']
})
export class VendorDashboardSidebarComponent implements OnInit {
  home =faHome;
  product = faBriefcase
  order = faDollarSign
  customer = faUsers
  review = faStar
  settings = faTools
  constructor() { }

  ngOnInit(): void {
  }

}
