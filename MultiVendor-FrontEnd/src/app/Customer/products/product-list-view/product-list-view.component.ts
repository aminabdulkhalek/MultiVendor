import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {
  @Input()
  product;
  star=faStar;
  half_star=faStarHalfAlt;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  redirectToProduct(){
    this.router.navigate(['product'])
  }
}
