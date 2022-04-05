import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faPhone } from '@fortawesome/free-solid-svg-icons';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { API_URL, AuthService } from 'src/app/shared/auth.service';
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
  value;
  items = []
  total = 0
  shipping = 0
  isSignedIn: boolean;
  errorMessage: any;
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
    this.getCartItems()
  }
  signOut() {
    this.authService.signOut();
  }
  handleMinus() {
    if (this.value > 0) {
      this.value--;
    }
  }
  handlePlus() {
    this.value++;
  }
  redirectToCheckout() {
    this.router.navigate(['checkout'])
  }
  getCartItems() {
    this.http.get<any>(API_URL + 'customer/cart-itmes').subscribe({
      next: data => {
        console.log(data)
        this.items = data.Cart_items;
        this.items.forEach(element => {
          this.total += (element.product.price * element.quantity)
        });
        if (this.items.length) {
          this.shipping = 50.99
        }else{
          this.shipping = 0
        }
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  deleteItem(id) {
    console.log(id)
    const body = {
      product_id: id
    }
    this.http.post<any>(API_URL + 'customer/remove-from-cart', body).subscribe({
      next: data => {
        console.log(data);
        this.getCartItems()
        this.total = 0;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  redirectToProducts() {
    this.router.navigate(['products'])

  }
}
