import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersBoxComponent } from './customers-box.component';

describe('CustomersBoxComponent', () => {
  let component: CustomersBoxComponent;
  let fixture: ComponentFixture<CustomersBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
