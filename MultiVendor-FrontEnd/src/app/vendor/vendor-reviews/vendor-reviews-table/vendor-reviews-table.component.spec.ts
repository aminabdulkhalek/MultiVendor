import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorReviewsTableComponent } from './vendor-reviews-table.component';

describe('VendorReviewsTableComponent', () => {
  let component: VendorReviewsTableComponent;
  let fixture: ComponentFixture<VendorReviewsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorReviewsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorReviewsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
