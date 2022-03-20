import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-box',
  templateUrl: './featured-box.component.html',
  styleUrls: ['./featured-box.component.scss']
})
export class FeaturedBoxComponent implements OnInit {
  selectedValue: string;
  constructor() { }

  ngOnInit(): void {
  }

}
