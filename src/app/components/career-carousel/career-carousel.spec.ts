import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCarousel } from './career-carousel';

describe('CareerCarousel', () => {
  let component: CareerCarousel;
  let fixture: ComponentFixture<CareerCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(CareerCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
