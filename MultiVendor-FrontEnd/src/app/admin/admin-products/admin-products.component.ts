import { Component, OnInit } from '@angular/core';
import { faSignOut, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  logout = faSignOut;
  notification = faBell;
  constructor() { }

  ngOnInit(): void {
  }

}
