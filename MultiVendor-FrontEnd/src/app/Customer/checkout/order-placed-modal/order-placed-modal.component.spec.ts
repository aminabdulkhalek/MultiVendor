import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlacedModalComponent } from './order-placed-modal.component';

describe('OrderPlacedModalComponent', () => {
  let component: OrderPlacedModalComponent;
  let fixture: ComponentFixture<OrderPlacedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPlacedModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPlacedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
