import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingFeaturesComponent } from './coaching-features.component';

describe('CoachingFeaturesComponent', () => {
  let component: CoachingFeaturesComponent;
  let fixture: ComponentFixture<CoachingFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachingFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachingFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
