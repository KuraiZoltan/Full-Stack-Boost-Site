import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRankFromComponent } from './select-rank-from.component';

describe('SelectRankFromComponent', () => {
  let component: SelectRankFromComponent;
  let fixture: ComponentFixture<SelectRankFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRankFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRankFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
