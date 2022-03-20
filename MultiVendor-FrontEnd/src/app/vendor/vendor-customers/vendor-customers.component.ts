import { Component, OnInit } from '@angular/core';
import { faSignOut, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vendor-customers',
  templateUrl: './vendor-customers.component.html',
  styleUrls: ['./vendor-customers.component.scss']
})
export class VendorCustomersComponent implements OnInit {
  logout = faSignOut;
  notification = faBell;
  imagePath = "favicon.ico";
  constructor() { }

  ngOnInit(): void {
  }

}
