import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDetalle } from './noticias-detalle';

describe('NoticiasDetalle', () => {
  let component: NoticiasDetalle;
  let fixture: ComponentFixture<NoticiasDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasDetalle],
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiasDetalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
