import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPhone, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop-box',
  templateUrl: './shop-box.component.html',
  styleUrls: ['./shop-box.component.scss']
})
export class ShopBoxComponent implements OnInit {
  phone = faPhone;
  star = faStar;
  half_star = faStarHalf

  @Input()
  shop;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToShop(){
    this.router.navigate(['shop'])
  }
}

