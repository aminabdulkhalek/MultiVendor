import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.scss']
})
export class WishlistItemComponent implements OnInit {
  @Input()product;
  star=faStar;
  half_star=faStarHalfAlt;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToProduct(){
    this.router.navigate(['product'])
  }

  addToShoppingCart(product_id){

  }
  removeFromwishlist(product_id){
    
  }
}
