import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faFile, faImage, faMoneyBill1Wave, faStar, faStarHalfAlt, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddProductModalComponent } from '../vendor-products.component';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt
  products =[];
  displayedColumns: string[] = ['id', 'name', 'price', 'flags', 'average_reviews', 'stock', 'preview', 'status', 'action'];
  dataSource = new MatTableDataSource<any>(null);
  errorMessage;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    ) { }
  openDialog1() {
    this.dialog.open(UpdateProductModalComponent);
  }
  getAllProducts() {
    this.http.get<any>(API_URL + 'vendor/products').subscribe({
      next: data => {
        console.log(data)
        this.dataSource = new MatTableDataSource<any>(data.products);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.products = data.products
        return data
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })

  }
  isEmptyObject() {
    return (this.products.length === 0);
  }
  ngOnInit(): void {
    this.getAllProducts()
  }

}

@Component({
  selector: 'app-update-product-modal',
  templateUrl: 'update-product-modal/update-product-modal.component.html',
  styleUrls: ['update-product-modal/update-product-modal.component.scss']
})
export class UpdateProductModalComponent implements OnInit {

  file_icon = faFile;
  delete = faTrashAlt;
  image_icon = faImage;
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;

  file1 = new File(['124afrstg5559bdfgh8'], 'Imge1.png');
  file2 = new File(['124afrstg5559bdfgh8'], 'Imge2.png');
  file3 = new File(['124afrstg5559bdfgh8'], 'Imge3.png');
  file4 = new File(['124afrstg5559bdfgh8'], 'Imge4.png');

  

  files: any[] = [this.file1,this.file2,this.file3,this.file4 ];

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

