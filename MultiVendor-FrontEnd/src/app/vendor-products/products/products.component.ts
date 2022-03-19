import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faFile, faImage, faMoneyBill1Wave, faStar, faStarHalfAlt, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddProductModalComponent } from '../vendor-products.component';

export interface Products {
  id: number;
  name: string;
  price: string;
  flags: number;
  reviews: number;
  stock: number;
  preview: string;
  status: string;

}

const Product_DATA: Products[] = [
  { id: 1, name: 'iphone 13 Pro MAX', price: "1299$", flags: 1, reviews: 2, stock: 10, preview: "/assets/img.png", status: "Approved" },
  { id: 2, name: 'Red Scarf', price: "1299$", flags: 0, reviews: 1, stock: 4, preview: "/assets/img.png", status: "Pending" },
  { id: 3, name: 'Chair', price: "1299$", flags: 0, reviews: 4, stock: 3, preview: "/assets/img.png", status: "Approved" },
  { id: 4, name: 'Blue Jeans', price: "1299$", flags: 1, reviews: 1.5, stock: 1, preview: "/assets/img.png", status: "Denied" },
  { id: 5, name: 'Black Shirt', price: "1299$", flags: 0, reviews: 3.5, stock: 3, preview: "/assets/img.png", status: "Approved" },
  { id: 6, name: 'Polo T-Shirt', price: "1299$", flags: 2, reviews: 2.5, stock: 5, preview: "/assets/img.png", status: "Approved" },
  { id: 7, name: 'Sockes', price: "1299$", flags: 0, reviews: 4, stock: 100, preview: "/assets/img.png", status: "Pending" },
  { id: 8, name: 'Suit', price: "1299$", flags: 0, reviews: 3, stock: 3, preview: "/assets/img.png", status: "Approved" },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {
  star = faStar;
  half_star = faStarHalfAlt;
  delete = faTrashAlt

  displayedColumns: string[] = ['id', 'name', 'price', 'flags', 'reviews', 'stock', 'preview', 'status', 'action'];
  dataSource = new MatTableDataSource<Products>(Product_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(public dialog: MatDialog) { }
  openDialog1() {
    this.dialog.open(UpdateProductModalComponent);
  }

  ngOnInit(): void {
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

