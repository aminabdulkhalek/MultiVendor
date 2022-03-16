import { Component, OnInit } from '@angular/core';
import { faBriefcase, faDollarSign, faHome, faStar, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  home =faHome;
  product = faBriefcase
  order = faDollarSign
  customer = faUsers
  review = faStar
  settings = faTools
  constructor() { }

  ngOnInit(): void {
  }

}
