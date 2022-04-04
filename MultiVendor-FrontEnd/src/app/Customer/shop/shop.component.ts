import { Component, OnInit } from '@angular/core';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faPhone, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { API_URL, AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  logout = faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart = faShoppingCart;
  shopping_cart = faShoppingBasket;
  phone = faPhone
  star = faStar;
  half_star = faStarHalf;
  vendor_id;
  products=[]

  banner;
  logo;
  address;

  private routeSub: Subscription
  errorMessage: any;
  name: any;
  isSignedIn: boolean;

  constructor(
    private route: ActivatedRoute,
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
    this.routeSub = this.route.params.subscribe(params => {
      this.vendor_id = params['id']
    });
    this.getVendor()
    this.getProducts()
  }
  signOut() {
    this.authService.signOut();
  }
  gridView(){
    const grid = document.getElementById('grid_view_icon');
    const list = document.getElementById('list_view_icon');
    const gird_body = document.getElementById('gird_body');
    const list_body = document.getElementById('list_body');
    grid.style.color = '#62C6FF';
    gird_body.classList.remove('hide');
    list.style.color = '#5A5A5A';
    list_body.classList.add('hide');
  }
  listView(){
    const grid = document.getElementById('grid_view_icon');
    const list = document.getElementById('list_view_icon');
    const gird_body = document.getElementById('gird_body');
    const list_body = document.getElementById('list_body');
    grid.style.color = '#5A5A5A';
    gird_body.classList.add('hide');
    list.style.color = '#62C6FF';
    list_body.classList.remove('hide');
  }

  getVendor(){
    const body ={'vendor_id':this.vendor_id}
    this.http.post<any>(API_URL+'customer/get-vendor',body).subscribe({
      next: data => {
        this.name = data.vendor.name
        this.banner = data.vendor.banner;
        this.logo = data.vendor.logo;
        this.address = data.vendor.address;
        this.phone = data.vendor.phone;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  getProducts(){
    const body = {
      vendor_id :this.vendor_id
    }
    this.http.post<any>(API_URL+'customer/get-vendor-products',body).subscribe({
      next: data => {
        console.log(data)
        this.products = data.Vendor_Products;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  flagVendor(){
    document.getElementById(`flag0`).classList.add('hide')
    document.getElementById(`flag1`).classList.remove('hide')
    const body = {
      'vendor_id':this.vendor_id
    }
    this.http.post<any>(API_URL+'customer/flag-vendor',body).subscribe({
      next: data => {
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  unFlagVendor(){
    document.getElementById(`flag1`).classList.add('hide')
    document.getElementById(`flag0`).classList.remove('hide')
    const body = {
      'vendor_id':this.vendor_id
    }
    this.http.post<any>(API_URL+'customer/unflag-vendor',body).subscribe({
      next: data => {
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}
