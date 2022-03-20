import { Component, OnInit } from '@angular/core';
import { faSignOut, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vendor-settings',
  templateUrl: './vendor-settings.component.html',
  styleUrls: ['./vendor-settings.component.scss']
})
export class VendorSettingsComponent implements OnInit {
  logout = faSignOut;
  notification = faBell;
  imagePath = "favicon.ico";
  constructor() { }

  ngOnInit(): void {
  }

}
