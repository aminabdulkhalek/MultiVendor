import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faSignOut, faUserCircle, faHeart, faShoppingCart, faShoppingBasket, faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

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
  half_star= faStarHalfAlt;
  value = 0;
  reviews = [1,2,3,4]

  private routeSub: Subscription

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params['id'])
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
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
