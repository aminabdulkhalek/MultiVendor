import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReviewsTableComponent } from './admin-reviews-table.component';

describe('AdminReviewsTableComponent', () => {
  let component: AdminReviewsTableComponent;
  let fixture: ComponentFixture<AdminReviewsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminReviewsTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReviewsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
