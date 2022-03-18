import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
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