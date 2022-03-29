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
}

