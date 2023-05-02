import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostingComponent } from './boosting.component';

describe('BoostingComponent', () => {
  let component: BoostingComponent;
  let fixture: ComponentFixture<BoostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
