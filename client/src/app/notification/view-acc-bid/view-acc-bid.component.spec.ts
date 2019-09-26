import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccBidComponent } from './view-acc-bid.component';

describe('ViewAccBidComponent', () => {
  let component: ViewAccBidComponent;
  let fixture: ComponentFixture<ViewAccBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAccBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
