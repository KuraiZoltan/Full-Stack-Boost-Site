import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantServicesComponent } from './valorant-services.component';

describe('ValorantServicesComponent', () => {
  let component: ValorantServicesComponent;
  let fixture: ComponentFixture<ValorantServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorantServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorantServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
