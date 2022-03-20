import { Component, Input, OnInit } from '@angular/core';
import { faHome, faBriefcase, faDollarSign, faUsers, faStar, faTools } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  home = faHome;
  product = faBriefcase;
  order = faDollarSign;
  customer = faUsers;
  review = faStar;
  settings = faTools;
 
  @Input()isDash: boolean = false;
  @Input()isProducts: boolean = false;
  @Input()isOrders: boolean = false;
  @Input()isCustomers: boolean = false;
  @Input()isReviews: boolean = false;
  @Input()isSettings: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
