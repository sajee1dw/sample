import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProfileComponent } from './dev-profile.component';

describe('DevProfileComponent', () => {
  let component: DevProfileComponent;
  let fixture: ComponentFixture<DevProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
