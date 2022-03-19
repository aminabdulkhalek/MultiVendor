import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentReviewsTableComponent } from './recent-reviews-table.component';

describe('RecentReviewsTableComponent', () => {
  let component: RecentReviewsTableComponent;
  let fixture: ComponentFixture<RecentReviewsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentReviewsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentReviewsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
