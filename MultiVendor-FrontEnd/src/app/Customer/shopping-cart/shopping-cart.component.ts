import { Component, OnInit } from '@angular/core';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  logout = faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart = faShoppingCart;
  shopping_cart = faShoppingBasket;
  phone = faPhone
  constructor() { }

  ngOnInit(): void {
  }

}
