import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorReviewsComponent } from './vendor-reviews.component';

describe('VendorReviewsComponent', () => {
  let component: VendorReviewsComponent;
  let fixture: ComponentFixture<VendorReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
