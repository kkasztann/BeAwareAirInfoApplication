import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MHelpComponent } from './m-help.component';

describe('MHelpComponent', () => {
  let component: MHelpComponent;
  let fixture: ComponentFixture<MHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
