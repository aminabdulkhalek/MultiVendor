import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faListSquares, faList, faTableList, faListOl, faList12, faClipboardList, faGripLinesVertical, faGripLines, faDisplay, faBoxes, faThList, faChessBoard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  logout=faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart= faShoppingCart;
  shopping_cart= faShoppingBasket;
  products;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }
  ngAfterViewInit() {
    this.products.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

}
