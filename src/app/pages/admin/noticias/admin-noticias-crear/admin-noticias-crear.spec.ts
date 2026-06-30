import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoticiasCrear } from './admin-noticias-crear';

describe('AdminNoticiasCrear', () => {
  let component: AdminNoticiasCrear;
  let fixture: ComponentFixture<AdminNoticiasCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNoticiasCrear],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminNoticiasCrear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
