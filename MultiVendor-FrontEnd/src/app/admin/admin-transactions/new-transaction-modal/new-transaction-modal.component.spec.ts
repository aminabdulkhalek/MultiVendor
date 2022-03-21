import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionModalComponent } from './new-transaction-modal.component';

describe('NewTransactionModalComponent', () => {
  let component: NewTransactionModalComponent;
  let fixture: ComponentFixture<NewTransactionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTransactionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransactionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
