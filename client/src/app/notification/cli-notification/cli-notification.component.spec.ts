import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliNotificationComponent } from './cli-notification.component';

describe('CliNotificationComponent', () => {
  let component: CliNotificationComponent;
  let fixture: ComponentFixture<CliNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
