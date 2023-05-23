import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingServicesComponent } from './coaching-services.component';

describe('CoachingServicesComponent', () => {
  let component: CoachingServicesComponent;
  let fixture: ComponentFixture<CoachingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachingServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
