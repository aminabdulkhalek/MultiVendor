import { Component, OnInit } from '@angular/core';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  logout=faSignOut;
  account = faUserCircle;
  wishlist = faHeart;
  cart= faShoppingCart;
  shopping_cart= faShoppingBasket;
  selected_img = '/assets/img.png'
  star= faStar;
  half_star= faStarHalf;
  value = 0;
  constructor() { }

  ngOnInit(): void {
  }
  changeImg(img){
    this.selected_img = img;
  }
  

  handleMinus() {
    if (this.value>0) {
      this.value--;  
    }
  }
  handlePlus() {
    this.value++;    
  }
}
