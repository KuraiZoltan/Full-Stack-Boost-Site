import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueFeaturesComponent } from './league-features.component';

describe('LeagueFeaturesComponent', () => {
  let component: LeagueFeaturesComponent;
  let fixture: ComponentFixture<LeagueFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
