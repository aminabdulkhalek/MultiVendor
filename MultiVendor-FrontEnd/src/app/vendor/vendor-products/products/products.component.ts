import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { faFile, faImage, faMoneyBill1Wave, faStar, faStarHalfAlt, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddProductModalComponent } from '../vendor-products.component';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {
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



  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
    ) { }
  openDialog1(product_id) {
    this.dialog.open(UpdateProductModalComponent ,{data:{'product_id':product_id}});
  }
  getAllProducts() {
    this.http.get<any>(API_URL + 'vendor/products').subscribe({
      next: data => {
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
  deleteProduct(product_id){
    const body = {'product_id':product_id}
    this.http.post<any>(API_URL+'vendor/delete-product',body).subscribe({
      next: data => {
        this.getAllProducts();
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
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
  success;
  errorMessage;



  categories;
  selected_value

  product_name;
  feature1;
  feature2;
  feature3;
  feature4;
  price;
  stock;
  desc1;
  desc2;
  
  @ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;

  file1 = new File(['124afrstg5559bdfgh8'], 'Imge1.png');
  file2 = new File(['124afrstg5559bdfgh8'], 'Imge2.png');
  file3 = new File(['124afrstg5559bdfgh8'], 'Imge3.png');
  file4 = new File(['124afrstg5559bdfgh8'], 'Imge4.png');

  

  files: any[] = [this.file1,this.file2,this.file3,this.file4 ];
  imgBase64Path1: any;
  body: any;
  imgBase64Path2: any;
  imgBase64Path3: any;
  imgBase64Path4: any;

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
  constructor(private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data) { }

  product_id = this.data.product_id;  
  ngOnInit(): void {
    this.getProductinfo(this.product_id)
    this.getCategories()
  }
  getProductinfo(product_id){
    const body ={
      'product_id':product_id
    }
    this.http.post<any>(API_URL + 'user/product',body).subscribe({
      next: data => {
        this.product_name = data.product.product_name;
        this.feature1= data.product.feature1;
        this.feature2= data.product.feature2;
        this.feature3= data.product.feature3;
        this.feature4= data.product.feature4;
        this.price= data.product.price;
        this.stock= data.product.stock;
        this.desc1= data.product.desc1;
        this.desc2= data.product.desc2;
        this.selected_value= data.product.category_id;
        
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
      }
    })
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

  submitChanges(product_id){
    const body ={
      'product_id':product_id,
      'product_name':this.product_name,
      'feature1':this.feature1,
      'feature2':this.feature2,
      'feature3':this.feature3,
      'feature4':this.feature4,
      'price':this.price,
      'stock':this.stock,
      'desc1':this.desc1,
      'desc2':this.desc2,
      'category_id': this.selected_value,
      'img1':this.imgBase64Path1,
      'img2':this.imgBase64Path2,
      'img3':this.imgBase64Path3,
      'img4':this.imgBase64Path4,
      
    }
    this.http.post<any>(API_URL + 'vendor/update-product',body).subscribe({
      next: data => {
        console.log(data)
        this.getProductinfo(product_id)
        this.success=data
        
      },
      error: error => {
        console.log(error)
        this.errorMessage = error.message;
        console.error('There was an error!', this.errorMessage);
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
      };
    };
    reader2.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        this.imgBase64Path2 = e.target.result;
      };
    };
    reader3.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        this.imgBase64Path3 = e.target.result;
      };
    };
    reader4.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        this.imgBase64Path4 = e.target.result;
      };
    };
    reader1.readAsDataURL(fileInput[0]);
    reader2.readAsDataURL(fileInput[1]);
    reader3.readAsDataURL(fileInput[2]);
    reader4.readAsDataURL(fileInput[3]);
  }

}



