import { Component, OnInit } from '@angular/core';
import { faBell, faPlusSquare, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.scss']
})
export class VendorProductsComponent implements OnInit {
  logout = faSignOut;
  notification = faBell;
  imagePath = "favicon.ico";
  add = faPlusSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
