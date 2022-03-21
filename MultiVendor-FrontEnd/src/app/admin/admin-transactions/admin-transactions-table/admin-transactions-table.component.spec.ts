import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTransactionsTableComponent } from './admin-transactions-table.component';

describe('AdminTransactionsTableComponent', () => {
  let component: AdminTransactionsTableComponent;
  let fixture: ComponentFixture<AdminTransactionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTransactionsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
