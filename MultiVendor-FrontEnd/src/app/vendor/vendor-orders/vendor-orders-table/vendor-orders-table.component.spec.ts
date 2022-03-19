import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOrdersTableComponent } from './vendor-orders-table.component';

describe('VendorOrdersTableComponent', () => {
  let component: VendorOrdersTableComponent;
  let fixture: ComponentFixture<VendorOrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorOrdersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
