import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachingHeaderComponent } from './coaching-header.component';

describe('CoachingHeaderComponent', () => {
  let component: CoachingHeaderComponent;
  let fixture: ComponentFixture<CoachingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachingHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
