import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomersTableComponent } from './admin-customers-table.component';

describe('AdminCustomersTableComponent', () => {
  let component: AdminCustomersTableComponent;
  let fixture: ComponentFixture<AdminCustomersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCustomersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
