import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { API_URL, AuthService } from 'src/app/shared/auth.service';
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
  selected_img = ''
  star = faStar;
  half_star = faStarHalfAlt;
  value = 1;
  reviews = []
  product_id;
  isSignedIn!: boolean;
  errorMessage


  img1;
  img2;
  img3;
  img4;
  product_name;
  average_reviews;
  total_reviews;
  sales;
  product_owner;
  feature1;
  feature2;
  feature3;
  feature4;
  stock;
  desc1;
  desc2;
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
    this.getProductInfo()
  }
  signOut() {
    this.authService.signOut();
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  changeImg(img) {
    console.log(img)
    this.selected_img = img;
  }

  handleMinus() {
    if (this.value > 1) {
      this.value--;
    }
  }
  handlePlus() {
    this.value++;
  }

  getProductInfo(){
    const body = {product_id: this.product_id}
    this.http.post<any>(API_URL+'user/product',body).subscribe({
      next: data => {
        console.log(data)
        this.selected_img =data.product.img1;
        this.img1 = data.product.img1;
        this.img2 = data.product.img3;
        this.img3= data.product.img2;
        this.img4= data.product.img4;
        this.product_name= data.product.product_name;
        this.average_reviews= data.product.average_reviews;
        this.total_reviews= data.product.total_reviews;
        this.sales= data.product.sales;
        this.product_owner= data.product.product_owner;
        this.feature1= data.product.feature1;
        this.feature2= data.product.feature2;
        this.feature3= data.product.feature3;
        this.feature4= data.product.feature4;
        this.stock= data.product.stock;
        this.desc1= data.product.desc1;
        this.desc2= data.product.desc2;
        this.reviews = data.product.reviewz;

      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  addToWishlist(){
    document.getElementById(`love0`).classList.add('hide')
    document.getElementById(`love1`).classList.remove('hide')
    const body = {
      'product_id':this.product_id
    }
    this.http.post<any>(API_URL+'customer/love-product',body).subscribe({
      next: data => {
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  removeFromWishlist(){
    document.getElementById(`love1`).classList.add('hide')
    document.getElementById(`love0`).classList.remove('hide')
    const body = {
      'product_id':this.product_id
    }
    this.http.post<any>(API_URL+'customer/remove-product-wishlist',body).subscribe({
      next: data => {
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  flagProduct(){
    document.getElementById(`flag0`).classList.add('hide')
    document.getElementById(`flag1`).classList.remove('hide')
    const body = {
      'product_id':this.product_id
    }
    this.http.post<any>(API_URL+'customer/flag-product',body).subscribe({
      next: data => {
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
  unFlagProduct(){
    document.getElementById(`flag1`).classList.add('hide')
    document.getElementById(`flag0`).classList.remove('hide')
    const body = {
      'product_id':this.product_id
    }
    this.http.post<any>(API_URL+'customer/unflag-product',body).subscribe({
      next: data => {
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}
