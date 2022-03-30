import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
