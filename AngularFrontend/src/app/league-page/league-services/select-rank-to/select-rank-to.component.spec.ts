import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRankToComponent } from './select-rank-to.component';

describe('SelectRankToComponent', () => {
  let component: SelectRankToComponent;
  let fixture: ComponentFixture<SelectRankToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRankToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectRankToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
