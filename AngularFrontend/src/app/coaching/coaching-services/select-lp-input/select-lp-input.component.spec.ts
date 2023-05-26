import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLpInputComponent } from './select-lp-input.component';

describe('SelectLpInputComponent', () => {
  let component: SelectLpInputComponent;
  let fixture: ComponentFixture<SelectLpInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectLpInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
