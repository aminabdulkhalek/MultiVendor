import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersBoxComponent } from './orders-box.component';

describe('OrdersBoxComponent', () => {
  let component: OrdersBoxComponent;
  let fixture: ComponentFixture<OrdersBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
