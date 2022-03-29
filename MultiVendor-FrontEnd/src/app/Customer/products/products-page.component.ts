import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faListSquares, faList, faTableList, faListOl, faList12, faClipboardList, faGripLinesVertical, faGripLines, faDisplay, faBoxes, faThList, faChessBoard } from '@fortawesome/free-solid-svg-icons';
import { Options } from '@angular-slider/ngx-slider';

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

  logout = faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart = faShoppingCart;
  shopping_cart = faShoppingBasket;
  products = [1,2,3,4,5,6];
  selectedCategory: string;
  categories: string[] = ['All','Women Clothes', 'Men Clothes','Shoes', 'Furniture', 'Health & Hygine', 'Food', 'Tools', 'Electronic Devices','Medication', 'E-Books'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }
  ngAfterViewInit() {
    // this.products.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}
