import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDataComponent } from './m-data.component';

describe('MDataComponent', () => {
  let component: MDataComponent;
  let fixture: ComponentFixture<MDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
