import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevRegisterComponent } from './dev-register.component';

describe('DevRegisterComponent', () => {
  let component: DevRegisterComponent;
  let fixture: ComponentFixture<DevRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
