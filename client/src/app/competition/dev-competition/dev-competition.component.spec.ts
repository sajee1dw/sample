import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCompetitionComponent } from './dev-competition.component';

describe('DevCompetitionComponent', () => {
  let component: DevCompetitionComponent;
  let fixture: ComponentFixture<DevCompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevCompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
