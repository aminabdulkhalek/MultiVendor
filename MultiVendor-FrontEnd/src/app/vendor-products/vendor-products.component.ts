import { Component, OnInit } from '@angular/core';
import { faBell, faPlusSquare, faSignOut } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.scss']
})
export class VendorProductsComponent {
  logout = faSignOut;
  notification = faBell;
  imagePath = "favicon.ico";
  add = faPlusSquare;
  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(AddProductModalComponent);
  }
  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-add-product-modal',
  templateUrl: 'add-product-modal/add-product-modal.component.html',
  styleUrls: ['add-product-modal/add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
