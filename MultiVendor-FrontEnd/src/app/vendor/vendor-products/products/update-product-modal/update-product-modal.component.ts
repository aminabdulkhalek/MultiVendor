import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product-modal',
  template: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.scss']
})
export class UpdateProductModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
	declarations: [UpdateProductModalComponent],
    exports: [UpdateProductModalComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WrapperModule {}