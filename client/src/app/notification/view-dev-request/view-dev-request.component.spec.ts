import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDevRequestComponent } from './view-dev-request.component';

describe('ViewDevRequestComponent', () => {
  let component: ViewDevRequestComponent;
  let fixture: ComponentFixture<ViewDevRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDevRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDevRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
