import { Component, OnInit } from '@angular/core';
import { faSignOut, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-vednors',
  templateUrl: './admin-vednors.component.html',
  styleUrls: ['./admin-vednors.component.scss']
})
export class AdminVednorsComponent implements OnInit {
  logout = faSignOut;
  notification = faBell;
  constructor() { }

  ngOnInit(): void {
  }

}
