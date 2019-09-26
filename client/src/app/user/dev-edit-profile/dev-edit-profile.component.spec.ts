import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevEditProfileComponent } from './dev-edit-profile.component';

describe('DevEditProfileComponent', () => {
  let component: DevEditProfileComponent;
  let fixture: ComponentFixture<DevEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
