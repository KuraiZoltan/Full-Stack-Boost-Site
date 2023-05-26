import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRankLevelInputComponent } from './select-rank-level-input.component';

describe('SelectRankLevelInputComponent', () => {
  let component: SelectRankLevelInputComponent;
  let fixture: ComponentFixture<SelectRankLevelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRankLevelInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRankLevelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
