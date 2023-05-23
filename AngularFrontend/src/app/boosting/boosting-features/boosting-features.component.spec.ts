import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostingFeaturesComponent } from './boosting-features.component';

describe('BoostingFeaturesComponent', () => {
  let component: BoostingFeaturesComponent;
  let fixture: ComponentFixture<BoostingFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostingFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostingFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
