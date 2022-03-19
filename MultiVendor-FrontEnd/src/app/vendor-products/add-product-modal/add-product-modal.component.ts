import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, NgModule, OnInit, ViewChild } from '@angular/core';
import { faDeaf, faFile, faImage, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-product-modal',
  template: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
@NgModule({
	declarations: [AddProductModalComponent],
    exports: [AddProductModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WrapperModule {}