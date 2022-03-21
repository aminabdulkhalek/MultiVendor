import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommissionsTableComponent } from './admin-commissions-table.component';

describe('AdminCommissionsTableComponent', () => {
  let component: AdminCommissionsTableComponent;
  let fixture: ComponentFixture<AdminCommissionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommissionsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommissionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
