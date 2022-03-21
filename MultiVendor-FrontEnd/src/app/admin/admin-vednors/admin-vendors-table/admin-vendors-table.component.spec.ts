import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVendorsTableComponent } from './admin-vendors-table.component';

describe('AdminVendorsTableComponent', () => {
  let component: AdminVendorsTableComponent;
  let fixture: ComponentFixture<AdminVendorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVendorsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVendorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
