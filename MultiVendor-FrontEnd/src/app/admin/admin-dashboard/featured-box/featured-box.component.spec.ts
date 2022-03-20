import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBoxComponent } from './featured-box.component';

describe('FeaturedBoxComponent', () => {
  let component: FeaturedBoxComponent;
  let fixture: ComponentFixture<FeaturedBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
