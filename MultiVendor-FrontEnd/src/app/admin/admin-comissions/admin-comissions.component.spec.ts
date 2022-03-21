import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComissionsComponent } from './admin-comissions.component';

describe('AdminComissionsComponent', () => {
  let component: AdminComissionsComponent;
  let fixture: ComponentFixture<AdminComissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
