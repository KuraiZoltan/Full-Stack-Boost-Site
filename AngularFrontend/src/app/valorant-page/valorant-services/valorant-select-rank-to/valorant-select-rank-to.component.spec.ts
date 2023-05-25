import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantSelectRankToComponent } from './valorant-select-rank-to.component';

describe('ValorantSelectRankToComponent', () => {
  let component: ValorantSelectRankToComponent;
  let fixture: ComponentFixture<ValorantSelectRankToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorantSelectRankToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorantSelectRankToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
