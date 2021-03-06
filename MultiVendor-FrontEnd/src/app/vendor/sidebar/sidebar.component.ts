import { Component, Input, OnInit } from '@angular/core';
import { faBriefcase, faDollarSign, faHome, faMoneyBill1Wave, faMoneyCheck, faMoneyCheckDollar, faShoppingBag, faShoppingBasket, faShoppingCart, faSitemap, faStar, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  home = faHome;
  product = faBriefcase;
  order = faMoneyCheckDollar;
  customer = faUsers;
  review = faStar;
  settings = faTools;

  constructor() { }
  
  @Input()isDash: boolean = false;
  @Input()isProducts: boolean = false;
  @Input()isOrders: boolean = false;
  @Input()isCustomers: boolean = false;
  @Input()isReviews: boolean = false;
  @Input()isSettings: boolean = false;


  ngOnInit(): void {
  }

}
