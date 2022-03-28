import { Component, OnInit } from '@angular/core';
import { faSignOut, faBell, faHeart, faShoppingCart, faUserCircle, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {
  logout=faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart= faShoppingCart;
  shopping_cart= faShoppingBasket;
  constructor() { }

  ngOnInit(): void {
  }

}
