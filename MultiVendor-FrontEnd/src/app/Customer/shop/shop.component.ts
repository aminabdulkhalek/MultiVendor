import { Component, OnInit } from '@angular/core';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faPhone, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

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
  products=[1,2,3,4,5,6,7,8,9]
  constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitzer:DomSanitizer,
  ) { 
    this.matIconRegistry.addSvgIcon(
      'facebook',
      this.domSanitzer.bypassSecurityTrustResourceUrl('/assets/socail_media_icon/facebook.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitzer.bypassSecurityTrustResourceUrl('/assets/socail_media_icon/instagram.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitzer.bypassSecurityTrustResourceUrl('/assets/socail_media_icon/twitter.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitzer.bypassSecurityTrustResourceUrl('/assets/socail_media_icon/linkedin.svg')
    );
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
