import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueServicesComponent } from './league-services.component';

describe('LeagueServicesComponent', () => {
  let component: LeagueServicesComponent;
  let fixture: ComponentFixture<LeagueServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeagueServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
