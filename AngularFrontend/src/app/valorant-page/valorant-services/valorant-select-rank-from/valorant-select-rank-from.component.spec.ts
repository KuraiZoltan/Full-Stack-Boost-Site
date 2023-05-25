import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantSelectRankFromComponent } from './valorant-select-rank-from.component';

describe('ValorantSelectRankFromComponent', () => {
  let component: ValorantSelectRankFromComponent;
  let fixture: ComponentFixture<ValorantSelectRankFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorantSelectRankFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorantSelectRankFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
