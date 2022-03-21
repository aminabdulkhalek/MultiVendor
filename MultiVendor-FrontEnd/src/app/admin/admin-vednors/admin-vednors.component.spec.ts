import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVednorsComponent } from './admin-vednors.component';

describe('AdminVednorsComponent', () => {
  let component: AdminVednorsComponent;
  let fixture: ComponentFixture<AdminVednorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVednorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVednorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
