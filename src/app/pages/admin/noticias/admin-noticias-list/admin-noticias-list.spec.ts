import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoticiasList } from './admin-noticias-list';

describe('AdminNoticiasList', () => {
  let component: AdminNoticiasList;
  let fixture: ComponentFixture<AdminNoticiasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminNoticiasList],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminNoticiasList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
