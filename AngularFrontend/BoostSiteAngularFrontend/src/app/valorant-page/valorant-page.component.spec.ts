import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantPageComponent } from './valorant-page.component';

describe('ValorantPageComponent', () => {
  let component: ValorantPageComponent;
  let fixture: ComponentFixture<ValorantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorantPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
