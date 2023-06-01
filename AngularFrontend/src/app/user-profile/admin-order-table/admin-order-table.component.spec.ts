import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderTableComponent } from './admin-order-table.component';

describe('AdminOrderTableComponent', () => {
  let component: AdminOrderTableComponent;
  let fixture: ComponentFixture<AdminOrderTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
