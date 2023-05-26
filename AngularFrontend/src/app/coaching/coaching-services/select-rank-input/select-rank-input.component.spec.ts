import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRankInputComponent } from './select-rank-input.component';

describe('SelectRankInputComponent', () => {
  let component: SelectRankInputComponent;
  let fixture: ComponentFixture<SelectRankInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRankInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRankInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
