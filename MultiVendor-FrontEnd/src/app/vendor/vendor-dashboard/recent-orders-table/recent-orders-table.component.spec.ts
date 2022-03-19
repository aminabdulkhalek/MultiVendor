import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOrdersTableComponent } from './recent-orders-table.component';

describe('RecentOrdersTableComponent', () => {
  let component: RecentOrdersTableComponent;
  let fixture: ComponentFixture<RecentOrdersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentOrdersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
