import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantFeaturesComponent } from './valorant-features.component';

describe('ValorantFeaturesComponent', () => {
  let component: ValorantFeaturesComponent;
  let fixture: ComponentFixture<ValorantFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorantFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorantFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
