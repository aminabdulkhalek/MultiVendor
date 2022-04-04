import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faPhone } from '@fortawesome/free-solid-svg-icons';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';


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
  phone = faPhone;
  value=0;
  items=[1,2,3]
  isSignedIn: boolean;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService: AuthService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
      if (!val) {
        this.router.navigate(['login']);
      }
    });
    if (localStorage.getItem('user_type') != '2') {
      localStorage.removeItem('user_type');
      this.signOut()
    }
  }
  signOut() {
    this.authService.signOut();
  }
  handleMinus() {
    if (this.value>0) {
      this.value--;
    }
  }
  handlePlus() {
    this.value++;
  }
  redirectToCheckout(){
    this.router.navigate(['checkout'])
  }
}
