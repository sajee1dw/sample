import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevNotificationComponent } from './dev-notification.component';

describe('DevNotificationComponent', () => {
  let component: DevNotificationComponent;
  let fixture: ComponentFixture<DevNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
