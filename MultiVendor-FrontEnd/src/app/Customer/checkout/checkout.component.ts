import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { OrderPlacedModalComponent } from './order-placed-modal/order-placed-modal.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  logout = faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart = faShoppingCart;
  shopping_cart = faShoppingBasket;
  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(OrderPlacedModalComponent);
  }

  ngOnInit(): void {
  }

}
