import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  logout=faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart= faShoppingCart;
  shopping_cart= faShoppingBasket;
  products=[1,2,3,4]
  isSignedIn: boolean;
  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService: AuthService,
    private http: HttpClient
  ) { }

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
    this.getWishlistItems()
  }
  signOut() {
    this.authService.signOut();
  }

  getWishlistItems(){

  }

}
