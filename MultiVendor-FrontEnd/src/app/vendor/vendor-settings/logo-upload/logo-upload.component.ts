import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faFile, faTrashAlt, faImage } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-logo-upload',
  templateUrl: './logo-upload.component.html',
  styleUrls: ['./logo-upload.component.scss']
})
export class LogoUploadComponent implements OnInit {
  file_icon=faFile;
  delete = faTrashAlt;
  image_icon = faImage;
  
@ViewChild("fileDropRef", { static: false })
  fileDropEl!: ElementRef;
  files: any[] = [];
  imgBase64Path: any;
  errorMessage: any;

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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  uploadfile(fileInput: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const image = new Image();
      image.src = e.target.result;
      image.onload = rs => {
        this.imgBase64Path = e.target.result;
        const body = {
          'logo': this.imgBase64Path
        }
        this.http.post<any>(API_URL + 'vendor/upload-logo', body).subscribe({
          next: data => {
            // console.log(data)
          },
          error: error => {
            this.errorMessage = error;
            console.error('There was an error!', this.errorMessage);
          }
        })
      };
    };
    reader.readAsDataURL(fileInput[0]);

  }


  deleteFile0() {
    this.imgBase64Path = null
  }
}
