import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostingHeaderComponent } from './boosting-header.component';

describe('BoostingHeaderComponent', () => {
  let component: BoostingHeaderComponent;
  let fixture: ComponentFixture<BoostingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostingHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
