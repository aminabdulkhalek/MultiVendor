import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-gird-view',
  templateUrl: './products-gird-view.component.html',
  styleUrls: ['./products-gird-view.component.scss']
})
export class ProductsGirdViewComponent implements OnInit {
  @Input()
  product;

  star = faStar;
  half_star = faStarHalfAlt;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToProduct(product_id) {
    this.router.navigate(['product'])
  }
}
