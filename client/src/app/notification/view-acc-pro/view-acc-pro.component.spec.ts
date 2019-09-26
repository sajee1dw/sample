import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccProComponent } from './view-acc-pro.component';

describe('ViewAccProComponent', () => {
  let component: ViewAccProComponent;
  let fixture: ComponentFixture<ViewAccProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
