import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  items: GalleryItem[];

  imageData = data;
  constructor(public gallery: Gallery) { }

  ngOnInit(): void {
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
  }

}
const data = [
  {
    srcUrl: '/assets/banner1.jpg',
    previewUrl: '/assets/banner1.jpg'
  },
  {
    srcUrl: '/assets/banner2.jpg',
    previewUrl: '/assets/banner2.jpg'
  },
  {
    srcUrl: '/assets/Banner3.jpg',
    previewUrl: '/assets/Banner3.jpg'
  },

];