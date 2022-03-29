import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGirdViewComponent } from './products-gird-view.component';

describe('ProductsGirdViewComponent', () => {
  let component: ProductsGirdViewComponent;
  let fixture: ComponentFixture<ProductsGirdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsGirdViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsGirdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
