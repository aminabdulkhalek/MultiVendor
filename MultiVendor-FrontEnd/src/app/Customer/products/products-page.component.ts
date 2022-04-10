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
    this.getProducts('All')
    
  }
  signOut() {
    this.authService.signOut();
  }
  getProducts(category){
    if (category =='All') {
      this.http.get<any>(API_URL+'customer/approved-products').subscribe({
        next: data => {
          this.products = data.products;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }
    if (category =='Women Clothes') {
      const body = {
        'category_id': 2
      }
      this.http.post<any>(API_URL+'customer/products-by-category',body).subscribe({
        next: data => {
          this.products = data.products;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }
    if (category =='Men Clothes') {
      const body = {
        'category_id': 3
      }
      this.http.post<any>(API_URL+'customer/products-by-category',body).subscribe({
        next: data => {
          this.products = data.products;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }
    if (category =='Furnature') {
      const body = {
        'category_id': 1
      }
      this.http.post<any>(API_URL+'customer/products-by-category',body).subscribe({
        next: data => {
          this.products = data.products;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }
    if (category =='Health & Beuaty') {
      const body = {
        'category_id': 4
      }
      this.http.post<any>(API_URL+'customer/products-by-category',body).subscribe({
        next: data => {
          this.products = data.products;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }
    if (category =='Shoes') {
      const body = {
        'category_id': 5
      }
      this.http.post<any>(API_URL+'customer/products-by-category',body).subscribe({
        next: data => {
          this.products = data.products;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }
    if (category =='Tools') {
      const body = {
        'category_id': 6
      }
      this.http.post<any>(API_URL+'customer/products-by-category',body).subscribe({
        next: data => {
          this.products = data.products;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }
    if (category =='Electronic Devices') {
      const body = {
        'category_id': 7
      }
      this.http.post<any>(API_URL+'customer/products-by-category',body).subscribe({
        next: data => {
          this.products = data.products;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }
    if (category =='Medications') {
      const body = {
        'category_id': 7
      }
      this.http.post<any>(API_URL+'customer/products-by-category',body).subscribe({
        next: data => {
          this.products = data.products;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }
    if (category =='E-Books') {
      const body = {
        'category_id': 9
      }
      this.http.post<any>(API_URL+'customer/products-by-category',body).subscribe({
        next: data => {
          this.products = data.products;
        },
        error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', this.errorMessage);
        }
      })
    }
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

