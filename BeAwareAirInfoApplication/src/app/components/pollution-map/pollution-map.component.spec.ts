import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionMapComponent } from './pollution-map.component';

describe('PollutionMapComponent', () => {
  let component: PollutionMapComponent;
  let fixture: ComponentFixture<PollutionMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollutionMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollutionMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
