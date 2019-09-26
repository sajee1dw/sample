import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDevAcceptComponent } from './view-dev-accept.component';

describe('ViewDevAcceptComponent', () => {
  let component: ViewDevAcceptComponent;
  let fixture: ComponentFixture<ViewDevAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDevAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDevAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
