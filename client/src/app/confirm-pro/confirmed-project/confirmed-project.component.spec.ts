import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedProjectComponent } from './confirmed-project.component';

describe('ConfirmedProjectComponent', () => {
  let component: ConfirmedProjectComponent;
  let fixture: ComponentFixture<ConfirmedProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
