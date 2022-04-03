import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  logout = faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart = faShoppingCart;
  shopping_cart = faShoppingBasket;
  selected_img = '/assets/img.png'
  star = faStar;
  half_star = faStarHalfAlt;
  value = 0;
  reviews = [1, 2, 3, 4]
  product_id;
  isSignedIn!: boolean;
  errorMessage

  private routeSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService: AuthService,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.product_id = params['id']
    });
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
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  changeImg(img) {
    this.selected_img = img;
  }


  handleMinus() {
    if (this.value > 0) {
      this.value--;
    }
  }
  handlePlus() {
    this.value++;
  }
}
