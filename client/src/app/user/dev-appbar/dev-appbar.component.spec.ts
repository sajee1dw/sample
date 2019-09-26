import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAppbarComponent } from './dev-appbar.component';

describe('DevAppbarComponent', () => {
  let component: DevAppbarComponent;
  let fixture: ComponentFixture<DevAppbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevAppbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevAppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
