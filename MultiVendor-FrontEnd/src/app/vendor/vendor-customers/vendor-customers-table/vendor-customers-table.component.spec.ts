import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCustomersTableComponent } from './vendor-customers-table.component';

describe('VendorCustomersTableComponent', () => {
  let component: VendorCustomersTableComponent;
  let fixture: ComponentFixture<VendorCustomersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorCustomersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCustomersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
