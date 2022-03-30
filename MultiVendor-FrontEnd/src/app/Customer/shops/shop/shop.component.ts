import { Component, OnInit } from '@angular/core';
import { faPhone, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  phone = faPhone;
  star = faStar;
  half_star = faStarHalf
  constructor() { }

  ngOnInit(): void {
  }

}
