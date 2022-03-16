import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vendor-dashboard-sidebar',
  templateUrl: './vendor-dashboard-sidebar.component.html',
  styleUrls: ['./vendor-dashboard-sidebar.component.scss']
})
export class VendorDashboardSidebarComponent implements OnInit {
  home =faHome;
  constructor() { }

  ngOnInit(): void {
  }

}
