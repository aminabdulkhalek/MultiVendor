import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorCustomersComponent } from './vendor-customers.component';

describe('VendorCustomersComponent', () => {
  let component: VendorCustomersComponent;
  let fixture: ComponentFixture<VendorCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
