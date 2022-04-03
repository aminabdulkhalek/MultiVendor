import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faListSquares, faList, faTableList, faListOl, faList12, faClipboardList, faGripLinesVertical, faGripLines, faDisplay, faBoxes, faThList, faChessBoard } from '@fortawesome/free-solid-svg-icons';
import { Options } from '@angular-slider/ngx-slider';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { API_URL, AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 200
  };
  isSignedIn!: boolean;
  errorMessage;
  logout = faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart = faShoppingCart;
  shopping_cart = faShoppingBasket;
  products = [];
  selectedCategory: string;
  categories: string[] = ['All', 'Women Clothes', 'Men Clothes', 'Shoes', 'Furniture', 'Health & Hygine', 'Food', 'Tools', 'Electronic Devices', 'Medication', 'E-Books'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
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
    this.getProducts()
    
  }
  signOut() {
    this.authService.signOut();
  }
  getProducts(){
    this.http.get<any>(API_URL+'customer/approved-products').subscribe({
      next: data => {
        console.log(data)
        this.products = data.products;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }

  gridView() {
    const grid = document.getElementById('grid_view_icon');
    const list = document.getElementById('list_view_icon');
    const gird_body = document.getElementById('gird_body');
    const list_body = document.getElementById('list_body');
    grid.style.color = '#62C6FF';
    gird_body.classList.remove('hide');
    list.style.color = '#5A5A5A';
    list_body.classList.add('hide');
  }
  listView() {
    const grid = document.getElementById('grid_view_icon');
    const list = document.getElementById('list_view_icon');
    const gird_body = document.getElementById('gird_body');
    const list_body = document.getElementById('list_body');
    grid.style.color = '#5A5A5A';
    gird_body.classList.add('hide');
    list.style.color = '#62C6FF';
    list_body.classList.remove('hide');
  }
}

