import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantConfirmOrderComponent } from './valorant-confirm-order.component';

describe('ValorantConfirmOrderComponent', () => {
  let component: ValorantConfirmOrderComponent;
  let fixture: ComponentFixture<ValorantConfirmOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorantConfirmOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorantConfirmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
