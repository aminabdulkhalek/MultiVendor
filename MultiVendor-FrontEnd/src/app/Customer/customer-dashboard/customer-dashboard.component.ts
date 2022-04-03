import { Component, OnInit } from '@angular/core';
import { faSignOut, faBell, faHeart, faShoppingCart, faUserCircle, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Router } from "@angular/router"
import { HttpClient } from '@angular/common/http';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { API_URL, AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {
  logout = faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart = faShoppingCart;
  shopping_cart = faShoppingBasket;
  isSignedIn!: boolean;
  errorMessage;
  img1;
  img2;
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

    this.getFeaturedProducts()
  }
  signOut() {
    this.authService.signOut();
  }
  productsPage() {
    this.router.navigate(['products'])
  }
  getFeaturedProducts(){
    this.http.get<any>(API_URL+'customer/featured-products').subscribe({
      next: data => {
        console.log(data)
        this.img1 = data.products[0].img1;
        this.img2 = data.products[1].img1;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}
