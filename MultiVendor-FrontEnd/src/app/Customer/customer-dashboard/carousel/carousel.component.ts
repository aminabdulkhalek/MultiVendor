import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  items: GalleryItem[];

  imageData =[];
  errorMessage: any;
  constructor(public gallery: Gallery,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getFeatured();
    
  }
  getFeatured() {
    this.http.get<any>(API_URL + 'customer/featured').subscribe({
      next: data => {
        console.log(data.vendor_info.banner)
        this.imageData = [
          {
            srcUrl: data.vendor_info.banner,
            previewUrl: data.vendor_info.banner
          },
        ];
        this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }

}
