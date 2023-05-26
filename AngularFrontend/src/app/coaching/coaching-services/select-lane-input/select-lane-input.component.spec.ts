import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLaneInputComponent } from './select-lane-input.component';

describe('SelectLaneInputComponent', () => {
  let component: SelectLaneInputComponent;
  let fixture: ComponentFixture<SelectLaneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLaneInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLaneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
