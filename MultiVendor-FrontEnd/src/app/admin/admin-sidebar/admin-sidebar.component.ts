import { Component, Input, OnInit } from '@angular/core';
import { faHome, faBriefcase, faDollarSign, faUsers, faStar, faTools, faUserAlt, faMoneyBillTransfer, faMoneyBill, faShirt, faUser, faMoneyBills, faShop, faShopLock, faShoePrints, faShoppingBasket, faUsersCog, faUsersGear, faUsersRays, faUsersLine, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent implements OnInit {
  home = faHome;
  product = faShirt;
  order = faShoppingBasket;
  customers = faUsers;
  review = faStar;
  vendor = faShop;
  commission = faMoneyBills;
  transaction = faMoneyBillTransfer;

 
  @Input()isDash: boolean = false;
  @Input()isVendors: boolean = false;
  @Input()isProducts: boolean = false;
  @Input()isCommission: boolean = false;
  @Input()isOrders: boolean = false;
  @Input()isTransaction: boolean = false;
  @Input()isReviews: boolean = false;
  @Input()isCustomers: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
