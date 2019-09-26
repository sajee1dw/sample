import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliHomeComponent } from './cli-home.component';

describe('CliHomeComponent', () => {
  let component: CliHomeComponent;
  let fixture: ComponentFixture<CliHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
