import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBell, faFile, faImage, faPlusSquare, faSignOut, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthStateService } from 'src/app/shared/auth-state.service';
import { API_URL, AuthService } from 'src/app/shared/auth.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.scss']
})
export class VendorProductsComponent {
  logout = faSignOut;
  notification = faBell;

  add = faPlusSquare;
  imagePath = "";
  isSignedIn!: boolean;
  vendor_name;
  errorMessage;

  constructor(
    public dialog: MatDialog,
    private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService: AuthService,
    private http: HttpClient) { }

  openDialog() {
    this.dialog.open(AddProductModalComponent);
  }
  ngOnInit(): void {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
      if (!val) {
        this.router.navigate(['login']);
      }
    });
    if (localStorage.getItem('user_type') != '1') {
      localStorage.removeItem('user_type');
      this.signOut()
    }
    this.getInfo()
  }
  signOut() {
    this.authService.signOut();
  }
  getInfo() {
    const body = { id: localStorage.getItem('user_id') }
    this.http.post<any>(API_URL + 'user/name', body).subscribe({
      next: data => {
        this.vendor_name = data.Name;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL + 'vendor/get-profile').subscribe({
      next: data => {
        this.imagePath = data.vendor.logo;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
  }
}

@Component({
  selector: 'app-add-product-modal',
  templateUrl: 'add-product-modal/add-product-modal.component.html',
  styleUrls: ['add-product-modal/add-product-modal.component.scss']
})
export class AddProductModalComponent {
  file_icon = faFile;
  delete = faTrashAlt;
  image_icon = faImage;
  product_name;
  price;
  feature1;
  feature2;
  feature3;
  feature4;
  stock;
  categories;
  selected_value;
  desc1;
  desc2;
  errorMessage;
  success;
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files: any[] = [];
  imgBase64Path: any;
  imgBase64Path1: any;
  imgBase64Path2: any;
  imgBase64Path3: any;
  imgBase64Path4: any;
  body = {
    'img1':'',
    'img2':'',
    'img3':'',
    'img4':'',
  }
  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  constructor(private auth: AuthStateService,
    public router: Router,
    public token: TokenService,
    public authService: AuthService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories() {

    this.http.get<any>(API_URL + 'user/categories').subscribe({
      next: data => {
        this.categories = data.categories;

        for (let i = 0; i < this.categories.length; i++) {
          this.categories[i].name = data.categories[i].category_name;
        }
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

  }
  submitProduct() {

    const body = {
      'product_name': this.product_name,
      'feature1': this.feature1,
      'feature2': this.feature2,
      'feature3': this.feature3,
      'feature4': this.feature4,
      'price': this.price,
      'category_id': this.selected_value,
      'stock': this.stock,
      'desc1': this.desc1,
      'desc2': this.desc2,
      'img1':this.imgBase64Path1,
      'img2':this.imgBase64Path2,
      'img3':this.imgBase64Path3,
      'img4':this.imgBase64Path4,

    }
    console.log(this.selected_value)
    console.log(body)
    this.http.post<any>(API_URL + 'vendor/new-product', body).subscribe({
      next: data => {
        console.log(body);
        console.log(data);
        this.success = data;
        this.errorMessage = null;
        this.product_name= null;
          this.feature1= null;
          this.feature2= null;
          this.feature3= null;
          this.feature4= null;
          this.price= null;
          this.selected_value= null;
          this.stock= null;
          this.desc1= null;
          this.desc2= null;
          this.imgBase64Path1 = null
          this.imgBase64Path2 = null
          this.imgBase64Path3 = null
          this.imgBase64Path4 = null
          this.deleteFile(1)
          this.deleteFile(2)
          this.deleteFile(3)
          this.deleteFile(4)
      },
      error: error => {
        console.log(error)
        this.errorMessage = error.error;
      }
    })

  }

  uploadfile(fileInput: any) {
    const reader1 = new FileReader();
    const reader2 = new FileReader();
    const reader3 = new FileReader();
    const reader4 = new FileReader();
    reader1.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        this.imgBase64Path1 = e.target.result;
        this.body.img1 = this.imgBase64Path1;
      };
    };
    reader2.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        this.imgBase64Path2 = e.target.result;
        this.body.img2 = this.imgBase64Path2;
      };
    };
    reader3.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        this.imgBase64Path3 = e.target.result;
        this.body.img3 = this.imgBase64Path3;
      };
    };
    reader4.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        this.imgBase64Path4 = e.target.result;
        this.body.img4 = this.imgBase64Path4;
      };
    };
    reader1.readAsDataURL(fileInput[0]);
    reader2.readAsDataURL(fileInput[1]);
    reader3.readAsDataURL(fileInput[2]);
    reader4.readAsDataURL(fileInput[3]);
  }

}
