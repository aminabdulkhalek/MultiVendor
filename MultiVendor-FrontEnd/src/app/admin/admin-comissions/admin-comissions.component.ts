import { Component, OnInit } from '@angular/core';
import { faSignOut, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-comissions',
  templateUrl: './admin-comissions.component.html',
  styleUrls: ['./admin-comissions.component.scss']
})
export class AdminComissionsComponent implements OnInit {
  logout = faSignOut;
  notification = faBell;
  constructor() { }

  ngOnInit(): void {
  }

}
