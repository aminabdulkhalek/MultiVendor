import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { API_URL, AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';
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
  isSignedIn: boolean;

  name;
  country;
  address;
  city;
  state;
  zip_code;
  phone;
  email;
  errorMessage: any;

  constructor(public dialog: MatDialog, private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService: AuthService,
    private http: HttpClient) { }
  openDialog() {
    this.dialog.open(OrderPlacedModalComponent);
  }

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

  placeOrder() {

    this.http.get<any>(API_URL + 'customer/place-order').subscribe({
      next: data => {
        console.log(data)
        const body = {
          'order_id': data.order.id,
          'country': this.country,
          'city': this.city,
          'state': this.state,
          'street_address': this.address,
          'email': this.email,
          'zip_code': this.zip_code,
          'phone': this.phone
        }
        this.http.post<any>(API_URL + 'customer/add-billing-info',body).subscribe({
          next: data => {
            console.log(data)
          },
          error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', this.errorMessage);
          }
        })
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

  }

}
