import { Component, OnInit } from '@angular/core';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  logout=faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart= faShoppingCart;
  shopping_cart= faShoppingBasket;
  constructor() { }

  ngOnInit(): void {
  }

}
