import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faBell, faFile, faImage, faPlusSquare, faSignOut, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
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
    public authService :AuthService,
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
    if (localStorage.getItem('user_type') != '1'){
      localStorage.removeItem('user_type');
      this.signOut()
    }
    this.getInfo()
  }
  signOut() {
    this.authService.signOut();
  }
  getInfo(){
    const body = {id: localStorage.getItem('user_id')}
    this.http.post<any>(API_URL+'user/name',body).subscribe({
      next: data => {
        this.vendor_name = data.Name;
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
    this.http.get<any>(API_URL+'vendor/get-profile').subscribe({
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
export class AddProductModalComponent  {
  file_icon=faFile;
  delete = faTrashAlt;
  image_icon = faImage;
@ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files: any[] = [];

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
  constructor() { }

  ngOnInit(): void {
  }

}
