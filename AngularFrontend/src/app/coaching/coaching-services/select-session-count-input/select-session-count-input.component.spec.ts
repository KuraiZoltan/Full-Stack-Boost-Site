import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSessionCountInputComponent } from './select-session-count-input.component';

describe('SelectSessionCountInputComponent', () => {
  let component: SelectSessionCountInputComponent;
  let fixture: ComponentFixture<SelectSessionCountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSessionCountInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSessionCountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
