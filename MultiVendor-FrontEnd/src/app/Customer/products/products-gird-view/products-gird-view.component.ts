import { Component, OnInit } from '@angular/core';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-gird-view',
  templateUrl: './products-gird-view.component.html',
  styleUrls: ['./products-gird-view.component.scss']
})
export class ProductsGirdViewComponent implements OnInit {
  star=faStar;
  half_star=faStarHalfAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
