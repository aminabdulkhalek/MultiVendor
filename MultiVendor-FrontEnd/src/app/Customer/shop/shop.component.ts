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

}
